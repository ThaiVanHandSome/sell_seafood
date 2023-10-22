import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import { publicRoutes } from './routes';

function App() {
    return (
        <div className="app">
            <Router>
                <Routes>
                    {publicRoutes.map(({ path, component, layout }, index) => {
                        let Layout = layout;
                        const Comp = component;
                        if (!layout) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={path}
                                element={
                                    <Layout>
                                        <Comp />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
