import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faBars, faCartShopping, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import { routes } from '~/config';
import { PhoneRungIcon, TruckIcon } from '~/components/Icons';
import Popper from '~/components/Popper';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    const [openCart, setOpenCart] = useState(false);

    const toggle = (setState) => {
        setState((prev) => !prev);
    };
    const categories = useSelector((state) => state.categoryReducer.list);
    const dispatch = useDispatch();

    return (
        <header className={cx('wrapper')}>
            <div className={cx('header-main', 'w-100')}>
                <div className={cx('header-container', 'd-none', 'd-lg-flex')}>
                    <img
                        width="130"
                        height="60"
                        className={cx('logo')}
                        src="https://cuahanghaisan.shostweb.com/wp-content/uploads/2021/10/logo-demo-seafood.svg"
                        alt="Seafood Store Logo"
                    />
                    <ul className={cx('list-nav', 'd-flex', 'align-items-center', 'd-none', 'd-lg-flex')}>
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
                            interactive
                            placement="top-start"
                            offset={[-20, 0]}
                            delay={[100, 0]}
                            zIndex={100}
                            render={(attrs) => (
                                <Popper>
                                    <div className={cx('nav-item-menu')}>
                                        <ul className="p-0" style={{ listStyle: 'none' }}>
                                            {categories.map((category, index) => (
                                                <li key={index} style={{ margin: '0 10px' }}>
                                                    <Link
                                                        className={cx('nav-menu-link')}
                                                        to={`/category/${category.id}`}
                                                    >
                                                        {category.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </Popper>
                            )}
                        >
                            <li className={cx('nav-item')}>
                                <Link className={cx('nav-item-link')} to={routes.home}>
                                    <span style={{ marginRight: '4px' }}>Cửa hàng</span>
                                    <FontAwesomeIcon className="fs-5" icon={faArrowDown} />
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
                        <li className={cx('nav-item', 'divider')}></li>
                        <li className={cx('nav-item')}>
                            <Link className={cx('nav-item-link')} to={routes.home}>
                                <PhoneRungIcon />
                                <span className="ms-2">028 4455 7788</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Mobile Nav */}
                <div className={cx('header-container', 'd-flex', 'd-lg-none')}>
                    <div>
                        <div className={cx('mobile-nav-icon')} onClick={() => setOpenMenu(true)}>
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                        <Offcanvas isOpen={openMenu} toggle={() => toggle(setOpenMenu)}>
                            <OffcanvasHeader toggle={() => toggle(setOpenMenu)}>Offcanvas</OffcanvasHeader>
                            <OffcanvasBody>
                                <strong>This is the Offcanvas body.</strong>
                            </OffcanvasBody>
                        </Offcanvas>
                    </div>
                    <img
                        width="130"
                        height="60"
                        className={cx('logo')}
                        src="https://cuahanghaisan.shostweb.com/wp-content/uploads/2021/10/logo-demo-seafood.svg"
                        alt="Seafood Store Logo"
                    />
                    <div className={cx('mobile-nav-icon')}>
                        <FontAwesomeIcon icon={faCartShopping} onClick={() => setOpenCart(true)} />
                        <Offcanvas isOpen={openCart} direction="end" toggle={() => toggle(setOpenCart)}>
                            <OffcanvasHeader toggle={() => toggle(setOpenCart)}>Offcanvas</OffcanvasHeader>
                            <OffcanvasBody>
                                <strong>This is the Offcanvas body.</strong>
                            </OffcanvasBody>
                        </Offcanvas>
                    </div>
                </div>
            </div>
            <div className={cx('header-bottom', 'w-100', 'd-none', 'd-lg-flex')}>
                <div className={cx('header-container')} style={{ height: '100%' }}>
                    <div
                        className="text-white d-flex flex-row align-items-center"
                        style={{ fontSize: '1.6rem', fontWeight: '600' }}
                    >
                        <img
                            width={16}
                            height={6}
                            src="https://cuahanghaisan.shostweb.com/wp-content/uploads/2021/09/danh-muc-san-pham-icon.svg"
                            alt="Category Icon"
                        />
                        <span style={{ marginLeft: '12px' }}>Danh mục sản phẩm</span>
                    </div>
                    <div className={cx('search-container', 'text-white', 'd-flex', 'flex-row', 'align-items-center')}>
                        <select className={cx('search-selection')}>
                            <option value={''}>--Tất cả sản phẩm--</option>
                            {categories.map((category, index) => (
                                <option key={index} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                        <input
                            className={cx('search-inp')}
                            name="searchInp"
                            type="text"
                            placeholder="Nhập sản phẩm cần tìm..."
                        />
                        <button className={cx('search-btn', 'd-flex', 'align-items-center', 'justify-content-center')}>
                            <FontAwesomeIcon style={{ color: '#0073a0' }} icon={faSearch} />
                        </button>
                    </div>
                    <div className={cx('header-bottom-nav')}>
                        <ul>
                            <li>
                                <Link to={routes.home}>
                                    <FontAwesomeIcon icon={faUser} />
                                </Link>
                            </li>
                            <li className={cx('divider')}></li>
                            <Tippy
                                interactive
                                placement="bottom-start"
                                offset={[-20, 12]}
                                delay={[100, 0]}
                                zIndex={100}
                                render={(attrs) => (
                                    <Popper>
                                        <div {...attrs}>
                                            <p>Chưa có sản phẩm trong giỏ hàng</p>
                                        </div>
                                    </Popper>
                                )}
                            >
                                <li>
                                    <Link to={routes.home}>
                                        <FontAwesomeIcon icon={faCartShopping} />
                                    </Link>
                                </li>
                            </Tippy>
                            <li className={cx('divider')}></li>
                            <li>
                                <Link className="d-flex align-items-center" to={routes.home}>
                                    <TruckIcon />
                                    <div style={{ marginLeft: '8px' }}>
                                        <p className="m-0 fw-bold">Giao hàng trong 2h</p>
                                        <p style={{ fontSize: '1.4rem', fontWeight: '200' }} className="m-0 fst-italic">
                                            (8h-21h từ T2-Chủ Nhật)
                                        </p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
