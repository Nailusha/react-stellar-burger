import React from 'react';
import styles from './burger-ingridient.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from "react-redux";
import { clickOpen } from "../../../../services/store/reducers/modalOverlaySlice";
import { addIngridDetails, clickIngridient, counter } from "../../../../services/store/reducers/ingredientDetails";
import { useDrag } from "react-dnd";

function BurgerIngridient({ ingridient }) {
    const [elements, setElements] = useState(ingridient);
    const [draggedElements, setDraggedElements] = useState([]);
    const { selctIngridient, clickStutus, count } = useSelector(
      (state) => state.ingridDetails
    );
  
    const [, refDrag] = useDrag({
      type: "ingridient",
      item: ingridient,
    });
  
    const dispatch = useDispatch();
  
    const onClick = () => {
      dispatch(clickIngridient(true));
      dispatch(addIngridDetails(ingridient));
      dispatch(clickOpen(true));
    };

    return (
        <div className={styles.card} ref={refDrag} draggable>
          {ingridient.count > 0 && (
            <Counter
              count={
                ingridient.type === "bun" ? ingridient.count * 2 : ingridient.count
              }
            />
          )}
          <img className={styles.image} src={ingridient.image} onClick={onClick} />
          <span className={"text_type_main-default pt-1 " + styles.price}>
            {ingridient.price}
            <CurrencyIcon />
          </span>
          <p className={"text_type_main-default " + styles.name + " pt-1"}>
            {ingridient.name}
          </p>
        </div>
      );
}

export default BurgerIngridient;