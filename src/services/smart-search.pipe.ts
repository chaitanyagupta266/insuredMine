import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'smartSearch'
})
export class SmartSearchPipe implements PipeTransform {
    transform(items: any[], label:string, searchText: string): any[] {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        if (searchText) {
            searchText = searchText.toLowerCase();
        }
        return items.filter(function (item) {
            return JSON.stringify(item[label]).toLowerCase().includes(searchText);
        });
    }
}
