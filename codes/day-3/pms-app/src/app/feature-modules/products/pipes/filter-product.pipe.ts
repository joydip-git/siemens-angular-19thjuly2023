import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "src/app/models/product";

@Pipe({
    name: 'productfilter'
})
export class FilterProductPipe implements PipeTransform {
    transform(value: Product[], ...args: string[]): Product[] {
        return value.length > 0 && args[0] && args.length > 0 && args[0] !== '' ?
            value
                .filter(
                    (p: Product) => p.productName
                        .toLocaleLowerCase()
                        .includes(
                            args[0].toLocaleLowerCase()
                        )
                )
            : value;
    }

}