import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'expirationDate',
    standalone: true
})
export class ExpirationDatePipe implements PipeTransform {
    transform(month: number | undefined, year: number | undefined): string {
        if (!month || !year || month === undefined || year === undefined) {
            return 'Invalid date';
        }

        // Ensure month is two digits
        const formattedMonth = month.toString().padStart(2, '0');

        // Convert full year to last two digits (e.g., 2025 -> 25)
        const formattedYear = year.toString().slice(-2);

        return `${formattedMonth}/${formattedYear}`;
    }
}
