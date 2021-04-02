/**
 * Burda Olusacak her kisinin olusturuldugu kisimdir. Bilgiler alt kisima burdan iletilmektedir.
 */
import Item from './item/item'
export function Personal({list}) {
    return(
        list.map((people) => (
            <div>
              <Item {...people}/>
            </div>
          ))
    )
}

