import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <img src="logo.png" alt="Logo" />
      <h1>وقف الدكتور محمد شوقي الفنجري</h1>
      <nav>
        <ul style={{ textAlign: 'right' }}>
          <li><Link to="/">الصفحة الرئيسية</Link></li>
          <li><Link to="/about">من نحن</Link></li>
          <li><Link to="/awards">الجوائز والمسابقات</Link></li>
          <li><Link to="/scholarships">المنح الدراسية</Link></li>
          <li><Link to="/news">الأخبار</Link></li>
          <li><Link to="/contact">اتصل بنا</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
