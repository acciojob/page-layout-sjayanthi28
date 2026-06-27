
import React from "react";
import './../styles/App.css';
import PageLayout from "./PageLayout";

function App () {
  return (
    <div>
      <PageLayout
        header={<h1>Welcome to my website</h1>}
        footer={<p>@ 2023 My website.All rights reserved.</p>}>

<p>This is the content of my website</p>
        </PageLayout>

    </div>

  )
}

export default App
