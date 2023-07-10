import React from 'react';
import styles from './burger-constructor.module.css';

import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructorTop(ingridient) {
    return (
        <div className={'pl-6 pt-4 pb-4'} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={'1255'}
            thumbnail={ingridient.image}
          />
        </div>
      )
  }
  
  function BurgerConstructorMiddle({ingridient}) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px'}}>
          {ingridient.map((item) => {
            return (
              <div key={item._id} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <DragIcon/>
                <ConstructorElement
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image_mobile}
                />
              </div>
            )
            })
          }
      </div>
    )
  }
  
  function BurgerConstructorBottom({ingridient}) {
    return (
      <div className={"pl-6 pt-4"} style={{ display: 'flex', flexDirection: 'column', gap: '10px'}} >
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={ingridient.image}
        />
      </div>
    )
  }
  
  
    
  export {BurgerConstructorTop, BurgerConstructorMiddle, BurgerConstructorBottom}