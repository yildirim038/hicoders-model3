/**
 * App js den gelen bilgi State kullanilarak bir alt kademeye gönderilir.
 */
import {useState} from 'react'
import Item from './item/item'

export default function FishList(props) {
  const [fishList] = useState(props.list)
return(
   fishList.map((fish,index)=>
  <Item  key={index} fish={fish} index={index}/>
))
}
