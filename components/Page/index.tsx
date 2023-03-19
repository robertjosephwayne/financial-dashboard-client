/**
=========================================================
* Material Dashboard 2 PRO React TS - v1.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-2-pro-react-ts
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect, ReactNode } from 'react';

// react-router-dom components
// import { useLocation } from 'react-router-dom';

// Material Dashboard 2 PRO React TS components
import MDBox from '../MDBox';

// Material Dashboard 2 PRO React context
import { useMaterialUIController, setLayout } from '../../context';

export default function Page({ children }: { children: ReactNode }): JSX.Element {
    const [controller, dispatch] = useMaterialUIController();
    const { miniSidenav } = controller;
    // setLayout(dispatch, 'dashboard');
    // const { pathname } = useLocation();

    // useEffect(() => {
    //     setLayout(dispatch, 'dashboard');
    // }, []);

    return (
        <MDBox
            sx={({ breakpoints, transitions, functions: { pxToRem } }: any) => ({
                p: 3,
                position: 'relative',
                height: '100%',

                [breakpoints.up('xl')]: {
                    marginLeft: miniSidenav ? pxToRem(120) : pxToRem(274),
                    transition: transitions.create(['margin-left', 'margin-right'], {
                        easing: transitions.easing.easeInOut,
                        duration: transitions.duration.standard,
                    }),
                },
            })}
        >
            {children}
        </MDBox>
    );
}
