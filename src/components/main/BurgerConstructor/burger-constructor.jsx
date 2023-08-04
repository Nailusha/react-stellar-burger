import React, { memo, useCallback, useState } from "react";
import styles from "./burger-constructor.module.css";

import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import { addBun, addIngridient, deliteIngridient, removeList } from "../../../services/store/reducers/burgerConstructorSlice";
import { v4 as uuidv4 } from "uuid";
import { BurgerConstructorCard } from "./burger-constructor-card/burger-constructor-card";

const BurgerConstructor = memo(function BurgerConstructor({ data, index }) {
  const dispatch = useDispatch();
  const { draggedBun, draggedIngridients } = useSelector(
    (state) => state.constIngridient
  );
  const { selctIngridient, clickStutus, count } = useSelector(
    (state) => state.ingridDetails
  );

  const { bun, ingridients, isLoding } = useSelector(
    (state) => state.ingridients
  );

  const [{ isDropped }, refDrop] = useDrop({
    accept: "ingridient",
    drop(item) {
      const itemWithUuId = {
        ...item,
        _uuid: uuidv4(),
      };
      {
        item.type === "bun"
          ? dispatch(addBun(itemWithUuId))
          : dispatch(addIngridient(itemWithUuId));
      }
    },
    collect: (monitor) => ({
      isDropped: monitor.isOver(),
    }),
  });

  const [, drop] = useDrop(() => ({ accept: "card" }));

  const handleDeliteElement = useCallback((uuid) => {
    dispatch(deliteIngridient(uuid));
  });

  return (
    <div ref={refDrop} className={isDropped ? styles.gradient_border : {}}>
      <div className={styles.bun + " pl-6 pt-4 pb-4"}>
        {draggedBun.map((item) => {
          return (
            <ConstructorElement
              type="top"
              isLocked={true}
              text={item.name + " (Верх)"}
              price={item.price}
              thumbnail={item.image}
              key={item._uuid}
            />
          );
        })}
      </div>

      <div className={styles.itemMidle + " custom-scroll pr-2"}>
        {draggedIngridients
          .filter((card) => card.type !== "bun")
          .map((card, index) => {
            return (
              <BurgerConstructorCard
                key={card._uuid}
                index={index}
                data={card}
                handleDeliteElement={handleDeliteElement}
              />
            );
          })}
      </div>

      <div className={styles.bun + " pl-6 pt-4"}>
        {draggedBun.map((item) => {
          return (
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={item.name + " (Низ)"}
              price={item.price}
              thumbnail={item.image}
              key={item._uuid}
            />
          );
        })}
      </div>
    </div>
  );
});

export default BurgerConstructor;