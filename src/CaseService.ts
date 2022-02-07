import { HttpService } from "@nestjs/axios";
import { Injectable, CACHE_MANAGER, Inject } from "@nestjs/common";
import { urls } from "./url";
import { AUTH_BODY, AUTH_HEADER } from "./config";
import { lastValueFrom, map } from "rxjs";
import { Case } from "./Case";

@Injectable()
export class CaseService {
    
    constructor(private httpService: HttpService) {}

    public async createCase(body: Case) {
        const data = await lastValueFrom(this.httpService.post(urls.AUTH_URL, AUTH_BODY, {
            headers: AUTH_HEADER
        }).pipe(
            map(response => response.data),
        )).catch(e => {
            console.log(e);
        });
        const token = data.access_token;
        const headers = {
            "wh-topic": "createdCase",
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json"
        }

        const response = await lastValueFrom(this.httpService.post(urls.CASE_URL, JSON.stringify(body), {
            headers
        }).pipe(
            map(response => response.data),
        )).catch(e => {
            console.log(e);
        });
        console.log(response);
        return { data: "Successfully Create a Case" }
    }

    public async updateCase(body: Case) {
        const data = await lastValueFrom(this.httpService.post(urls.AUTH_URL, AUTH_BODY, {
            headers: AUTH_HEADER
        }).pipe(
            map(response => response.data),
        )).catch(e => {
            console.log(e);
        });
        const token = data.access_token;
        const headers = {
            "wh-topic": "updatedCase",
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json"
        }

        const response = await lastValueFrom(this.httpService.post(urls.CASE_URL, JSON.stringify(body), {
            headers
        }).pipe(
            map(response => response.data),
        )).catch(e => {
            console.log(e);
        });
        console.log(response);
        return { data: "Successfully Updated a Case" }
    }

}