import React from 'react';
import BCrumb from '../../components/Bcrumb/BCrumb';
import Layout from '../../components/layout/Layout';
import Survey from "../../components/survey/Survey";

const PlayGround = () => {
    return (
        <Layout>
            <BCrumb />
            <Survey />
        </Layout>
    )
}

export default PlayGround;