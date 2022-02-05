import { Body, Controller, Post } from "@nestjs/common";
import { Case } from "./Case";
import { CaseService } from "./CaseService";

@Controller("/case")
export class CaseController {
    constructor(private readonly caseService: CaseService) {}

    @Post()
    createCase(@Body() body: Case) {
        const response = this.caseService.createCase(body);
        return "ok"
    }
} 