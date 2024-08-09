import React from 'react'

  


const DropDown = ({handelChnage}:{handelChnage:(name:string,value:string)=>void}) => {
 
    const dropdowns = [
        { 
          title: 'For Sale', 
          Search:"For_Sale",
          options: [
            { text: 'For Sale', value: 'for_sale' },
            { text: 'For Rent', value: 'for_rent' },
            { text: 'Sold', value: 'sold' }
          ] 
        },
        { 
          title: 'Price', 
          Search:"Price",
          options: [
            { text: 'Under $100,000', value: 'under_100000' },
            { text: '$100,000 - $200,000', value: '100000_200000' },
            { text: '$200,000 - $300,000', value: '200000_300000' },
            { text: 'Over $300,000', value: 'over_300000' }
          ] 
        },
        { 
          title: 'Bed and Bath', 
          Search:"Bed_and_Bath",
          options: [
            { text: '1 Bed / 1 Bath', value: '1_bed_1_bath' },
            { text: '2 Bed / 2 Bath', value: '2_bed_2_bath' },
            { text: '3 Bed / 2 Bath', value: '3_bed_2_bath' },
            { text: '4+ Bed / 3+ Bath', value: '4_bed_3_bath' }
          ] 
        },
        { 
          title: 'Listing Status', 
          Search:"Listing_Status",
          options: [
            { text: 'Active', value: 'active' },
            { text: 'Pending', value: 'pending' },
            { text: 'Closed', value: 'closed' },
            { text: 'Withdrawn', value: 'withdrawn' }
          ] 
        },
        { 
          title: 'Type', 
          Search:"Type",
          options: [
            { text: 'House', value: 'house' },
            { text: 'Apartment', value: 'apartment' },
            { text: 'Condo', value: 'condo' },
            { text: 'Townhouse', value: 'townhouse' }
          ] 
        }
      ];
    
  return (
    <> 
     {
        dropdowns.map((item,index)=>(
           <select onChange={(e)=>handelChnage(item.Search,e.target.value)} defaultValue={item.options[0].value}  key={index} className=' select-dropdown bg-white py-2 rounded'>
            {
                item?.options.map((option,index)=>(
                    <option value={option.value} key={index}>{option.text}</option>
                ))
            }
         

           </select>


        ))
     }
     
    </>
  )
}

export default DropDown