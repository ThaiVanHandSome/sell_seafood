import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import { routes } from '~/config';
import { PhoneRungIcon } from '~/components/Icons';
import Popper from '~/components/Popper';
import { useDispatch, useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function Header() {
    const categories = useSelector((state) => state.categoryReducer.list);
    const dispatch = useDispatch();

    return (
        <header className={cx('wrapper')}>
            <div className={cx('header-main', 'w-100')}>
                <div className="container d-flex align-items-center justify-content-between">
                    <img
                        width="130"
                        height="60"
                        className={cx('logo')}
                        src="https://cuahanghaisan.shostweb.com/wp-content/uploads/2021/10/logo-demo-seafood.svg"
                        alt="Seafood Store Logo"
                    />
                    <ul className={cx('list-nav', 'd-flex', 'align-items-center')}>
                        <li className={cx('nav-item')}>
                            <Link className={cx('nav-item-link')} to={routes.home}>
                                Trang chủ
                            </Link>
                        </li>
                        <li className={cx('nav-item')}>
                            <Link className={cx('nav-item-link')} to={routes.home}>
                                Giới thiệu
                            </Link>
                        </li>
                        <Tippy
                            visible
                            interactive
                            placement="top-start"
                            offset={[-20, 10]}
                            zIndex={100}
                            render={(attrs) => (
                                <Popper>
                                    <div className={cx('nav-item-menu')}>
                                        <ul>
                                            {categories.map((category, index) => (
                                                <li key={index}>{category.name}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </Popper>
                            )}
                        >
                            <li className={cx('nav-item')}>
                                <Link className={cx('nav-item-link')} to={routes.home}>
                                    Cửa hàng
                                </Link>
                            </li>
                        </Tippy>
                        <li className={cx('nav-item')}>
                            <Link className={cx('nav-item-link')} to={routes.home}>
                                Liên hệ
                            </Link>
                        </li>
                        <li className={cx('nav-item')}>
                            <Link className={cx('nav-item-link')} to={routes.home}>
                                Tin tức
                            </Link>
                        </li>
                        <li className={cx('nav-item', 'nav-item-divider')}>
                            <div className={cx('divider')}></div>
                        </li>
                        <li className={cx('nav-item')}>
                            <Link className={cx('nav-item-link')} to={routes.home}>
                                <PhoneRungIcon />
                                <span>028 4455 7788</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
