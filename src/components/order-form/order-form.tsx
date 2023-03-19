import {memo, useState} from 'react';
import ModalWindow from '../modal-window/modal-window';
import SuccessMessage from '../success-message/success-message';
import './order-form.css';
import {client} from '../../client';
import {Order} from '../../types';
import LoadingScreen from '../loading-screen/loading-screen';
import ErrorScreen from '../error-screen/error-screen';


type PropsType = {
  modalActiveForm: boolean;
  setModalActive: (modalActive: boolean) => void;
}

function OrderForm({modalActiveForm, setModalActive}: PropsType) {
  const [formData, setFormData] = useState<Order>({name: '', phone: ''});
  const [formSended, setFormSended] = useState<boolean>(false);
  const [nameMistake, setNameMistake] = useState<boolean>(false);
  const [phoneMistake, setPhoneMistake] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const inputNameHandle = (data: Order) => {
    setFormData(data);
    data.name.length < 4 ? setNameMistake(true) : setNameMistake(false);
  };

  const inputPhoneHandle = (data: Order) => {
    setFormData(data);
    !/^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/.test(data.phone) ? setPhoneMistake(true) : setPhoneMistake(false);
  };

  const submitHandle = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (formData.name.length >= 4 && /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/.test(formData.phone)) {
      setIsLoading(true);
      const contact = {...formData, _type: 'client'};
      client.create(contact)
        .then(() => {
          setFormSended(true);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
          setIsError(true);
        });
    }
  };

  const leaveModalHandle = () => {
    setFormData({name: '', phone: ''});
    setModalActive(false);
    setFormSended(false);
    setIsLoading(false);
    setIsError(false);
  };

  if (isLoading) {
    return (
      <ModalWindow active={modalActiveForm} setActive={leaveModalHandle}>
        <LoadingScreen />
      </ModalWindow>
    );
  }

  if (isError) {
    return (
      <ModalWindow active={modalActiveForm} setActive={leaveModalHandle}>
        <ErrorScreen buttonHandle={leaveModalHandle}/>
      </ModalWindow>
    );
  }

  return (
    <ModalWindow active={modalActiveForm} setActive={leaveModalHandle}>
      {formSended ?
        <SuccessMessage buttonHandle={leaveModalHandle} />
        :
        <form className="order-form" onSubmit={(evt) => submitHandle(evt)}>
          <h2 className="order-form__title">Закажите VR планетарий</h2>
          <p className="order-form__description">Оставьте ваши контактные данные, мы обработаем заявку в течении двух рабочих дней и перезвоним вам.</p>
          <div className="order-form__input-wrapper">
            <input className="order-form__input" type="text" placeholder="Ваше имя" value={formData.name} onChange={(evt) => inputNameHandle({...formData, name: evt.target.value})} required />
            <span className={`${nameMistake ? 'mistake' : 'visually-hidden'}`}>Поле имя должно содержать от 4 символов</span>
          </div>
          <div className="order-form__input-wrapper">
            <input className="order-form__input" type="tel" placeholder="Ваш телефон" value={formData.phone} onChange={(evt) => inputPhoneHandle({...formData, phone: evt.target.value})} required />
            <span className={`${phoneMistake ? 'mistake' : 'visually-hidden'}`}>Введите корректный номер телефона</span>
          </div>
          <button className="custom__button order-form__submit-button" type="submit">Оправить</button>
        </form>}
    </ModalWindow>
  );
}

export default memo(OrderForm);
