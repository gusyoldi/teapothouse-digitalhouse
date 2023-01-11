import React from "react";
import TopBar from "./TopBar";
import ContentRowTop from "./ContentRowTop";
import Footer from "./Footer";

function ContentWrapper({cbc, products, users, lastProduct}) {
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop cbc={cbc} products={products} users={users} lastProduct={lastProduct}/>
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    );
}
export default ContentWrapper;
