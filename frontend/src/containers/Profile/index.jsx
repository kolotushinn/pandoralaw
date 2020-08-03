import React, { useState } from 'react';
import { Aside } from '../../components';
import Select from 'react-dropdown-select';
import './Profile.sass';

export default function Profile() {

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
  });
  
  const [categories, setCategories] = useState([
    { value: 'ПРОБИВ ПО НЕДВИЖИМОСТИ', label: 'ПРОБИВ ПО НЕДВИЖИМОСТИ' },
    { value: 'ПРОБИВ ПО ГИБДД', label: 'ПРОБИВ ПО ГИБДД' },
    { value: 'ПРОБИВ ПО ПРФ', label: 'ПРОБИВ ПО ПРФ' },
    { value: 'ПРОБИВ ПО МВД', label: 'ПРОБИВ ПО МВД' },
    { value: 'ПРОБИВ ПО СОТОВЫМ ОПЕРАТОРАМ', label: 'ПРОБИВ ПО СОТОВЫМ ОПЕРАТОРАМ' },
    { value: 'ПРОБИВ ПО ФСПП', label: 'ПРОБИВ ПО ФСПП' }
  ]);

  const onChange = e => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }


  return (
    <div className="profile">
      <div className="profile__container">
        <Aside />
        <div className="profile__content">

          <div className='profile__status'>

            <div className="profile__status-item">
              <p className="profile__status-title">Личные сообщения:</p>
              <div className="profile__status-info">
                <div className="profile__status-row">
                  <span className="profile__status-name">Новых</span>
                  <span className="profile__status-value">5</span>
                </div>
                <div className="profile__status-row">
                  <span className="profile__status-name">Всего</span>
                  <span className="profile__status-value">41</span>
                </div>
              </div>
            </div>

            <div className="profile__status-item">
              <p className="profile__status-title">Сделки ожидающие завершения:</p>
              <div className="profile__status-info">
                <button className="profile__status-row">
                  <span className="profile__status-name">Вы исполнитель</span>
                  <span className="profile__status-value">1</span>
                </button>
                <button className="profile__status-row">
                  <span className="profile__status-name">Вы заказчик</span>
                  <span className="profile__status-value">2</span>
                </button>
              </div>
            </div>

            <div className="profile__status-item">
              <p className="profile__status-title">Ваш депозит:</p>
              <div className="profile__status-info">
                <p className="profile__status-deposit">120000 руб</p>
              </div>
            </div>

            <div className="profile__status-item">
              <p className="profile__status-title">Ваш последний вход:</p>
              <div className="profile__status-info">
                <p className="profile__status-date">17 марта 2021 года</p>
              </div>
            </div>

          </div>

          <div className="profile__username">
            <p className="profile__username-title">Публикация услуги</p>
            <form className="profile__form">
              <input onChange={e => { onChange(e) }} name="title" type="text" placeholder="Название" className="profile__username-input" />
              <input onChange={e => { onChange(e) }} name="description" type="text" placeholder="Описание" className="profile__username-input" />
              <div className="profile__select-wrapper">
                <Select
                  multi={true}
                  options={categories}
                  name="Категории"
                  values={[]}
                  color="#fc171e"
                  onChange={(value) => {
                    setFormData({
                      ...formData,
                      category: value[0].value
                    })
                  }}
                  placeholder="Категории"
                  value
                />
              </div>
              <button type="button" className="profile__btn-submit site-btn site-btn_red site-btn_s3">Опубликовать услугу</button>
            </form>
          </div>

          <div className="profile__username">
            <p className="profile__username-title">Имя пользователя</p>
            <div className="profile__username-group">
              <input readOnly defaultValue="user4040" type="text" className="profile__username-input" />
              <span className="profile__username-description">видно всем</span>
            </div>
          </div>

          <div className="profile__username">
            <p className="profile__username-title">Опубликованные услуги</p>
            <div className="profile__username-group profile__services">
            </div>
          </div>

        </div>
      </div >
    </div >
  );
}