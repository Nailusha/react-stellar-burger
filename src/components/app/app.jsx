import styles from "./app.module.css";
import { useState } from "react";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { ingredientPropType } from '../../utils/prop-types.js';

import AppHeader from "../header/AppHeader/AppHeader";
import { data } from "../../utils/data.js";
import BurgerIngridient from "../main/BurgerIngredients/BurgerIngredient/BurgerIngredient";

function App() {

   return (
    <div className={styles.app}>
      <pre>
      	<BurgerIngridient />
      </pre>
    </div>
  );
}

export default App;
