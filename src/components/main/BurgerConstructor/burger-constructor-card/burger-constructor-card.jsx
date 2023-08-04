  import { ConstructorElement, DragIcon, } from "@ya.praktikum/react-developer-burger-ui-components";
  import React, { memo } from "react";
  import { useDrag, useDrop } from "react-dnd";
  import { useDispatch, useSelector } from "react-redux";
  import { moveIngridients } from "../../../services/store/reducers/burgerConstructorSlice";
  import styles from "./burger-constructor-card.module.css";
  
  export const BurgerConstructorCard = memo(function BurgerConstructorCard({
    data,
    handleDeliteElement,
    index,
    text,
    moveCard,
    findCard,
  }) {
    const { name, price, image_mobile, _id, _uuid } = data;
    const { draggedBun, draggedIngredients } = useSelector(
      (state) => state.constIngridient
    );
  
    const dispatch = useDispatch();
  
    const findIndex = (item) => {
      return draggedIngredients.indexOf(item);
    };
  
    // часть с ингредиентами в конструкторе
    const [{ isDragging }, refDrag] = useDrag({
      type: "card",
      item: { ingridient: data },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });
  
    const [, dropRef] = useDrop({
      accept: "card",
      hover({ ingridient }) {
        if (ingridient._uuid === data._uuid) return;
  
        dispatch(
          moveIngridients({
            indexFrom: findIndex(ingridient),
            indexTo: index,
            ingridient: ingridient,
          })
        );
      },
    });
  
    const opacity = isDragging ? 0 : 1;
  
    return (
      <div
        ref={(node) => dropRef(refDrag(node))}
        style={{ opacity }}
        className={styles.card}
      >
        <DragIcon />
        <ConstructorElement
          text={name}
          price={price}
          thumbnail={image_mobile}
          handleClose={() => handleDeliteElement(_uuid)}
        />
      </div>
    );
  });