import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import Slider from './Slider';

const cx = classNames.bind(styles);

function Home() {
    const categories = useSelector((state) => state.categoryReducer.list);
    return (
        <main className={cx('wrapper')}>
            <section className={cx('container')}>
                <div className="row gx-5">
                    <div className="col col-lg-3">
                        <div className={cx('col-inner')}>
                            <aside>
                                <ul className={cx('menu-category')}>
                                    {categories.map((category, index) => (
                                        <li className={cx} key={index}>
                                            <Link to={`/category/${category.id}`}>
                                                <img width={32} height={32} src={category.icon} alt="seafood icon" />
                                                <span>{category.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </aside>
                        </div>
                    </div>
                    <div className="col col-lg-6">
                        <div className={cx('col-inner')}>
                            <Slider />
                        </div>
                    </div>
                    <div className="col col-lg-3 "></div>
                </div>
            </section>
        </main>
    );
}

export default Home;
