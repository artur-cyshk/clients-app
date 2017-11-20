import { Injectable } from '@angular/core';
import { BirthdayDate } from '../models';


@Injectable()
export class DateService {
  getFormattedDate(birthday?: string): { date: BirthdayDate } {
    if (!birthday) {
      return;
    }
    const date = new Date(birthday);
    return {
      date: {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()
      }
    };
  }

  getSimpleDate(birthday?: { date: BirthdayDate }): string {
    const { year, month, day } = birthday.date;
    return `${month}/${day}/${year}`;
  }
}
