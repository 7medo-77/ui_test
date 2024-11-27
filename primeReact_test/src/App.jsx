// import { useState } from 'react'
// import { classNames } from 'primereact/utils';
// import { Rating } from 'primereact/rating';
// import { Tag } from 'primereact/tag';
// import './App.css'
// import { Button } from 'primereact/button';
// import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
// import 'primeicons/primeicons.css';

// function App() {
//   const [count, setCount] = useState(0)

//   const data = [
//     {
//       id: 'f230fh0g3',
//       name: 'Tech',
//       amount: 15000,
//       logo: 'pi-microchip'
//     },
//     {
//       id: 'asglkj21235',
//       name: 'Commerce',
//       amount: 11612,
//       logo: 'pi-shopping-cart',
//     },
//     {
//       id: '1351asdfgjl',
//       name: 'Business',
//       amount: 581235,
//       logo: 'pi-briefcase',
//     },
//     {
//       id: 'jasg61234',
//       name: 'Fashion',
//       amount: 622000,
//       logo: 'pi-apple',
//     },
//     {
//       id: 'jg235nba51',
//       name: 'Entertainment',
//       amount: 90012,
//       logo: 'pi-play',
//     },
//   ]

//   const itemTemplate = (product, index) => {
//     return (
//       <div className="col-12" key={product.id}>
//         <div className={classNames('flex flex-column xl:flex-row xl:align-items-start p-4 gap-4', { 'border-top-1 surface-border': index !== 0 })}>

//             {/* <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} /> */}

//             <div className="flex flex-column sm:flex-row justify-between align-center xl:align-items-start flex-1 gap-4 ">
//                 <div className="flex flex-column align-items-center sm:align-items-start gap-3 ">
//                     <div className="flex flex-col justify-center"><span className={`pi ${product.logo} text-align-bottom`}></span></div>
//                     <div className="text-2xl font-bold text-900">{product.name}</div>
//                     <div className="flex align-items-center gap-3">
//                         <span className="flex align-items-center gap-2">
//                             <i className="pi pi-tag"></i>
//                             <span className="font-semibold">{product.description}</span>
//                         </span>
//                     </div>
//                 </div>
//                 <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2 ">
//                     <span className="text-2xl font-semibold">${product.amount}</span>
//                 </div>
//             </div>
//           </div>
//       </div>
//     );
//   };

//   const listTemplate = (items) => {
//     let list = items.map((product, index) => {
//           return itemTemplate(product, index);
//       });

//     return <div className="grid grid-nogutter">{list}</div>;
//   }

//   return (
//     <section className="h-screen flex items-center justify-center" >
//       <DataView value={data} listTemplate={listTemplate} className='' />
//       <Button
//         label={`Count is ${count}`}
//         icon="pi pi-check"
//         onClick={() => setCount(count + 1)}
//         className="p-button-success mb-4"
//       />
//     </section>
//   )
// }

// export default App

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';

export default function CheckboxList() {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const data = [
    {
      id: 'f230fh0g3',
      name: 'Tech',
      amount: 15000,
      logo: 'pi-microchip'
    },
    {
      id: 'asglkj21235',
      name: 'Commerce',
      amount: 11612,
      logo: 'pi-shopping-cart',
    },
    {
      id: '1351asdfgjl',
      name: 'Business',
      amount: 581235,
      logo: 'pi-briefcase',
    },
    {
      id: 'jasg61234',
      name: 'Fashion',
      amount: 622000,
      logo: 'pi-apple',
    },
    {
      id: 'jg235nba51',
      name: 'Entertainment',
      amount: 90012,
      logo: 'pi-play',
    },
  ]


  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {data.map((value) => {
        const labelId = `checkbox-list-label-${value.id}`;

        return (
          <ListItem
            key={value}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.includes(value)}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
