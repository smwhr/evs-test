/**
 * API des Examens
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ExamStudent } from './examStudent';


export interface Exam { 
    student: ExamStudent;
    meeting_point?: string;
    date?: string;
    status?: Exam.StatusEnum;
}
export namespace Exam {
    export type StatusEnum = 'A organiser' | 'Annulé' | 'Recherche de place' | 'Confirmé';
    export const StatusEnum = {
        AOrganiser: 'A organiser' as StatusEnum,
        Annul: 'Annulé' as StatusEnum,
        RechercheDePlace: 'Recherche de place' as StatusEnum,
        Confirm: 'Confirmé' as StatusEnum
    };
}


