import React from 'react';
import { Link } from 'react-router-dom';
import { Mail20Regular, Call20Regular, MegaphoneOffRegular, CallConnectingFilled } from '@fluentui/react-icons';
import { SiApple, SiGoogleplay } from 'react-icons/si';
import { HiComputerDesktop } from 'react-icons/hi2';
import { MdOutlineDevicesOther } from 'react-icons/md';
import { SlSocialVkontakte } from 'react-icons/sl';
import { SiTwitter, SiOdnoklassniki } from 'react-icons/si';
import { ImLinkedin2 } from 'react-icons/im';
import { FaTelegramPlane } from 'react-icons/fa';
import './Footer.css'

function Footer() {
    const aboutUs = ['О компании', 'Вакансии', 'Программа бета-тестирования', 'Информация для партнёров', 'Размещение рекламы', 'Размещение рекламы', 'Политика конфиденциальности', 'Комплаенс'];
    const razdel = ['Мой Иви', 'Что нового', 'Фильмы', 'Сериалы', 'Мультфильмы', 'ТВ-каналы', 'Что посмотреть'];
    const social = [<SlSocialVkontakte />, <SiOdnoklassniki />, <SiTwitter />, <CallConnectingFilled />, <ImLinkedin2 />, <FaTelegramPlane />]
    return (
        <div className='footer_container'>
            <div className='footer_above'>
                <div className='footer_item_container'>
                    <p className='content_name'>О нас</p>
                    {aboutUs.map(item => <Link className='footer_item'>{item}</Link>)}
                </div>
                <div className='footer_item_container'>
                    <p className='content_name'>Разделы</p>
                    {razdel.map(item => <Link className='footer_item'>{item}</Link>)}
                    <Link className='activation_sertificat'>Активация сертификата</Link>
                </div>
                <div className='footer_item_container'>
                    <p className='content_name'>Служба поддержки</p>
                    <p className='footer_item'>Мы всегда готовы вам помочь.</p>
                    <p className='footer_item'>Наши операторы онлайн 24/7</p>
                    <Link className='write_chat'>Написать в чате</Link>
                    <div className='footer_actions'>
                        <Link className='footer_send_mail'><Mail20Regular /></Link>
                        <Link className='footer_call'><Call20Regular /></Link>
                    </div>
                    <div className='footer_ask_ivi'>
                        <Link>ask.ivi.ru</Link>
                        <p>Ответы на вопросы</p>
                    </div>
                </div>
                <div className='footer_item_container_last'>
                    <Link className='megaPhone_container'>
                        <div className='footer_megaPhone_icon'>
                            <MegaphoneOffRegular fontSize={55} fontWeight={700} />
                        </div>
                        <p className='footer_item'>Смотрите фильмы, сериалы и мультфильмы без рекламы</p>
                    </Link>
                </div>
            </div>

            <div className='footer_below'>
                <div className='devices_socials_container'>
                    <div className='footer_device_container'>
                        <Link className='footer_device'>
                            <SiApple className="footer_icon" />
                            <div className='footer_device_content'>
                                <p className='footer_download_text'>Загрузить в</p>
                                <p className='footer_download_type'>App Store</p>
                            </div>
                        </Link>
                        <Link className='footer_device'>
                            <SiGoogleplay className="footer_icon" />
                            <div className='footer_device_content'>
                                <p className='footer_download_text'>Доступно в</p>
                                <p className='footer_download_type'>Google Play</p>
                            </div>
                        </Link>
                        <Link className='footer_device'>
                            <HiComputerDesktop className="footer_icon" />
                            <div className='footer_device_content'>
                                <p className='footer_download_text'>Смотрите на</p>
                                <p className='footer_download_type'>Smart TV</p>
                            </div>
                        </Link>
                        <Link className='footer_device'>
                            <MdOutlineDevicesOther className="footer_icon" />
                            <p className='footer_download_type'>Все устройства</p>
                        </Link>
                    </div>
                    <div className='social_icons_container'>
                        {social.map(item =>
                            <div className='footer_social_icon_container'>
                                <Link className='footer_social_icon'>{item}</Link>
                            </div>
                        )}
                    </div>
                </div>
                <div className='footer_copyright'>
                    <p>© 2023 ООО «Иви.ру»</p>
                    <p>HBO ® and related service marks are the property of Home Box Office, Inc</p>
                </div>
            </div>

        </div>
    );
}

export default Footer;