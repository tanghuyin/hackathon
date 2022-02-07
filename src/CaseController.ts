import { Body, Controller, Post, Put } from "@nestjs/common";
import { Case } from "./Case";
import { CaseService } from "./CaseService";

@Controller("/case")
export class CaseController {
    constructor(private readonly caseService: CaseService) {}

    @Post()
    async createCase(@Body() body: Case) {
        const data = await this.caseService.createCase(body);
        return data;
    }

    @Put()
    async updateCase(@Body() body: Case) {
        const data = await this.caseService.updateCase(body);
        return data;
    }
} 