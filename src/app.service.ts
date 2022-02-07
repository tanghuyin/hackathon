import { Injectable } from '@nestjs/common';
import { Case } from './Case';
import { addDoc, collection, getFirestore, getDocs, doc, setDoc } from 'Firebase';
import { HttpService } from "@nestjs/axios";
import { lastValueFrom, map } from "rxjs";

@Injectable()
export class AppService {
  // send push message to users around (all users for now)
  
  constructor(private httpService: HttpService) {}

  async handleUpdateCaseWebhook(body: Case) {
    const db = getFirestore();
    const id = body.id;
    delete body.id; 
    await setDoc(doc(db, "CASE", id), body);
    return "updated"
  }

  async handleCreatedCaseWebhook(body: Case) {
    // save to data base
    const db = getFirestore();
    try {
      const docRef = await addDoc(collection(db, "CASE"), body)
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    // send text message to 911
    // TODO
    // send push message to users around (all users for now)
    const querySnapShot = await getDocs(collection(db, 'USER'));
    querySnapShot.forEach(async (doc) => {
      await this.sendPushNotification(doc.data().token, body.category.name + " around you!", body.comments);
    });
    return "created";
  }

  getHello(): string {
    return 'Hello World!';
  }

  
  async sendPushNotification(expoPushToken, title, body) {
    const message = {
      to: expoPushToken,
      sound: 'default',
      title: title,
      body: body,
      data: { someData: 'goes here' },
    };
    await lastValueFrom(this.httpService.post('https://exp.host/--/api/v2/push/send', JSON.stringify(message), {
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
    }}).pipe(
        map(response => response.data),
    )).catch(e => {
        console.log(e);
    });
  }
}
