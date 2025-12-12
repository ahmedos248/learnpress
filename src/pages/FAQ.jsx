import React from 'react'
import RoutingHeader from '../components/RoutingHeader'
const FAQ = () => {
  return (
    <div>
      <RoutingHeader
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
      />
    </div>
  );
}

export default FAQ
