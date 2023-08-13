import { useDispatch, useSelector } from "react-redux";
import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./user-form.module.css";
import { useState } from "react";

export function UserForm() {
  const dispatch = useDispatch();

  const { name, email } = useSelector((store) => store.userStatus.user);

  const [value, setValue] = useState({ name, email, password: "......." });

  const onChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Input
        name="name"
        placeholder="Имя"
        value={value?.name}
        icon="EditIcon"
        onChange={onChange}
      />
      <Input
        name="email"
        placeholder="Логин"
        value={value?.email}
        icon="EditIcon"
        onChange={onChange}
      />
      <PasswordInput
        type="password"
        name="password"
        autoComplete="on"
        placeholder="Пароль"
        icon="EditIcon"
        value={value?.password}
        onChange={onChange}
      />

      <div className={styles.buttons}>
        <Button
          htmlType="button"
          type="secondary"
          extraClass={styles.buttonCancel}
        >
          Отмена
        </Button>
        <Button htmlType="submit" type="primary">
          Сохранить
        </Button>
      </div>
    </form>
  );
}
