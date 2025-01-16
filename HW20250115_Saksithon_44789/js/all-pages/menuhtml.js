class menuindex extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =`
            <div class="area1">
                <div class="menu1">
                    <div class="menu0">
                        <span><a href="index.html">TH</a></span>
                        <span>I</span>
                        <span><a href="en/index.html">EN</a></span>
                    </div>
                    <a href="index.html"><img src="img/SG-Logo.png" alt="logo" ></a>
                    <li><a class="here" href="index.html">หน้าแรก</a></li>
                    <div class="drop2">
                        <li><a class="not">เกี่ยวกับเรา</a></li>
                        <div class="sub2">
                            <pre><a href="about.html">ประวัติ                                 </a></pre>
                            <pre><a href="business-overview.html">ลักษณะการประกอบธุรกิจ                    </a></pre>
                            <pre><a href="corporate-governance.html">บรรษัทภิบาล                         </a></pre>
                        </div>  
                    </div>        
                    <div class="drop3">
                        <li><a class="not">ผลิตภัณฑ์</a></li>
                        <div class="sub3">
                            <pre><a href="product-motorcycle-loan.html">สินเชื่อเช่าซื้อรถมอเตอร์ไซค์   </a></pre>
                            <pre><a href="persoloan.html">สินเชื่อส่วนบุคคล               </a></pre>
                        </div>
                    </div>
                    <div class="drop4">
                        <li><a class="not">ลูกค้า</a></li>
                        <div class="sub4">
                            <pre><a class="subtext" href="customer.html">S11 X                                                    </a></pre>
                            <pre><a class="submenu" href="dealer.html">ผู้จัดจำหน่าย                                             </a></pre>
                            <pre><a class="subtext" href="account-closing.html">ปิดบัญชี                                           </a></pre>
                            <pre><a class="subtext" href="PDPA.html">นโยบายด้านการคุ้มครองข้อมูลส่วนบุคคล                </a></pre>
                        </div>
                    </div>
                    <li><a class="not" href="contact.html">ติดต่อเรา</a></li>
                    <div class="drop5">
                    <li><a class="not">ข่าวสาร</a></li>
                    <div class="sub5">
                            <pre><a class="subtext" href="news-csr.html">กิจกรรมเพื่อสังคม (CSR)           </a></pre>
                            <pre><a class="subtext" href="activity sgroup.html">กิจกรรมภายในบริษัท           </a></pre>
                            <pre><a class="subtext" href="work-with-us.html">สมัครงาน                     </a></pre>
                        </div>
                    </div>
                    <div class="drop6">
                    <li><a class="not">นักลงทุนสัมพันธ์</a></li>
                    <div class="sub6">
                            <pre><a class="subtext" href="Financial-infor.html">ข้อมูลทางการเงิน            </a></pre>
                            <pre><a class="subtext" href="Investor-Relations.html">ข้อมูลสำหรับผู้ถือหุ้น         </a></pre>
                            <pre><a class="subtext" href="settrade.html">ตารางหุ้น                     </a></pre>
                            <pre><a class="subtext" href="publications.html">เอกสารเผยแพร่              </a></pre>
                        </div>
                    </div>
                </div>
            </div>
            
        `
    }
}
customElements.define('menu-index',menuindex)
/*-------------------------------------------เกี่ยวกับเรา----------------------------------------------------------*/
class menuabout extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =`
            <div class="area1">
                <div class="menu1">
                    <div class="menu0">
                        <span><a href="index.html">TH</a></span>
                        <span>I</span>
                        <span><a href="en/index.html">EN</a></span>
                    </div>
                    <a href="index.html"><img src="img/SG-Logo.png" alt="logo" ></a>
                    <li><a class="not" href="index.html">หน้าแรก</a></li>
                    <div class="drop2">
                        <li><a class="here">เกี่ยวกับเรา</a></li>
                            <div class="sub2">
                            <pre><a class="subtext" href="about.html">ประวัติ                                     </a></pre>
                            <pre><a class="subtext" href="business-overview.html">ลักษณะการประกอบธุรกิจ                        </a></pre>
                            <pre><a class="subtext" href="corporate-governance.html">บรรษัทภิบาล                              </a></pre>
                        </div>  
                    </div>        
                    <div class="drop3">
                        <li><a class="not">ผลิตภัณฑ์</a></li>
                        <div class="sub3">
                            <pre><a href="product-motorcycle-loan.html">สินเชื่อเช่าซื้อรถมอเตอร์ไซค์   </a></pre>
                            <pre><a href="persoloan.html">สินเชื่อส่วนบุคคล               </a></pre>
                        </div>
                    </div>
                    <div class="drop4">
                        <li><a class="not">ลูกค้า</a></li>
                        <div class="sub4">
                            <pre><a class="subtext" href="customer.html">S11 X                                               </a></pre>
                            <pre><a class="submenu" href="dealer.html">ผู้จัดจำหน่าย                                              </a></pre>
                            <pre><a class="subtext" href="account-closing.html">ปิดบัญชี                                              </a></pre>
                            <pre><a class="subtext" href="PDPA.html">นโยบายด้านการคุ้มครองข้อมูลส่วนบุคคล                             </a></pre>
                        </div>
                    </div>
                    <li><a class="not" href="contact.html">ติดต่อเรา</a></li>
                    <div class="drop5">
                        <li><a class="not">ข่าวสาร</a></li>
                        <div class="sub5">
                            <pre><a class="subtext" href="news-csr.html">กิจกรรมเพื่อสังคม (CSR)           </a></pre>
                            <pre><a class="subtext" href="activity sgroup.html">กิจกรรมภายในบริษัท           </a></pre>
                            <pre><a class="subtext" href="work-with-us.html">สมัครงาน                     </a></pre>
                        </div>
                    </div>
                    <div class="drop6">
                        <li><a class="not">นักลงทุนสัมพันธ์</a></li>
                        <div class="sub6">
                            <pre><a class="subtext" href="Financial-infor.html">ข้อมูลทางการเงิน            </a></pre>
                            <pre><a class="subtext" href="Investor-Relations.html">ข้อมูลสำหรับผู้ถือหุ้น         </a></pre>
                            <pre><a class="subtext" href="settrade.html">ตารางหุ้น                     </a></pre>
                            <pre><a class="subtext" href="publications.html">เอกสารเผยแพร่              </a></pre>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}
customElements.define('menu-about',menuabout)
/*--------------------------------------ผลิตภัณฑ์-----------------------------------------------------------------*/
class menuproduct extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =`
            <div class="area1">
                <div class="menu1">
                    <div class="menu0">
                        <span><a href="index.html">TH</a></span>
                        <span>I</span>
                        <span><a href="en/index.html">EN</a></span>
                    </div>
                    <a href="index.html"><img src="img/SG-Logo.png" alt="logo" ></a>
                    <li><a class="not" href="index.html">หน้าแรก</a></li>
                    <div class="drop2">
                        <li><a class="not">เกี่ยวกับเรา</a></li>
                        <div class="sub2">
                            <pre><a href="about.html">ประวัติ                          </a></pre>
                            <pre><a href="business-overview.html">ลักษณะการประกอบธุรกิจ               </a></pre>
                            <pre><a href="corporate-governance.html">บรรษัทภิบาล                    </a></pre>
                        </div>  
                    </div>        
                    <div class="drop3">
                        <li><a class="here">ผลิตภัณฑ์</a></li>
                        <div class="sub3">
                            <pre><a href="product-motorcycle-loan.html">สินเชื่อเช่าซื้อรถมอเตอร์ไซค์   </a></pre>
                            <pre><a href="persoloan.html">สินเชื่อส่วนบุคคล               </a></pre>
                        </div>
                    </div>
                    <div class="drop4">
                        <li><a class="not">ลูกค้า</a></li>
                        <div class="sub4">
                            <pre><a class="subtext" href="customer.html">S11 X                                                              </a></pre>
                            <pre><a class="submenu" href="dealer.html">ผู้จัดจำหน่าย                                                           </a></pre>
                            <pre><a class="subtext" href="account-closing.html">ปิดบัญชี                                                     </a></pre>
                            <pre><a class="subtext" href="PDPA.html">นโยบายด้านการคุ้มครองข้อมูลส่วนบุคคล                             </a></pre>
                        </div>
                    </div>
                    <li><a class="not" href="contact.html">ติดต่อเรา</a></li>
                    <div class="drop5">
                    <li><a class="not" href="#">ข่าวสาร</a></li>
                    <div class="sub5">
                            <pre><a class="subtext" href="news-csr.html">กิจกรรมเพื่อสังคม (CSR)           </a></pre>
                            <pre><a class="subtext" href="activity sgroup.html">กิจกรรมภายในบริษัท           </a></pre>
                            <pre><a class="subtext" href="corporate-governance.html">สมัครงาน                     </a></pre>
                        </div>
                    </div>
                    <div class="drop6">
                    <li><a class="not">นักลงทุนสัมพันธ์</a></li>
                    <div class="sub6">
                            <pre><a class="subtext" href="Financial-infor.html">ข้อมูลทางการเงิน            </a></pre>
                            <pre><a class="subtext" href="Investor-Relations.html">ข้อมูลสำหรับผู้ถือหุ้น         </a></pre>
                            <pre><a class="subtext" href="settrade.html">ตารางหุ้น                     </a></pre>
                            <pre><a class="subtext" href="publications.html">เอกสารเผยแพร่              </a></pre>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}
customElements.define('menu-product',menuproduct)
/*-------------------------------------ลูกค้า---------------------------------------------------------------*/
class menucustomer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =`
            <div class="area1">
                <div class="menu1">
                    <div class="menu0">
                        <span><a href="index.html">TH</a></span>
                        <span>I</span>
                        <span><a href="en/index.html">EN</a></span>
                    </div>
                    <a href="index.html"><img src="img/SG-Logo.png" alt="logo" ></a>
                    <li><a  class="not" href="index.html">หน้าแรก</a></li>
                    <div class="drop2">
                        <li><a class="not">เกี่ยวกับเรา</a></li>
                        <div class="sub2">
                            <pre><a href="about.html">ประวัติ                          </a></pre>
                            <pre><a href="business-overview.html">ลักษณะการประกอบธุรกิจ               </a></pre>
                            <pre><a href="corporate-governance.html">บรรษัทภิบาล                    </a></pre>
                        </div> 
                    </div>        
                    <div class="drop3">
                        <li><a class="not" href="#">ผลิตภัณฑ์</a></li>
                        <div class="sub3">
                            <pre><a href="product-motorcycle-loan.html">สินเชื่อเช่าซื้อรถมอเตอร์ไซค์   </a></pre>
                            <pre><a href="persoloan.html">สินเชื่อส่วนบุคคล               </a></pre>
                        </div>
                    </div>
                    <div class="drop4">
                        <li><a class="here">ลูกค้า</a></li>
                        <div class="sub4">
                            <pre><a class="subtext" href="customer.html">S11 X                                                       </a></pre>
                            <pre><a class="subtext" href="dealer.html">ผู้จัดจำหน่าย                                                        </a></pre>
                            <pre><a class="subtext" href="account-closing.html">ปิดบัญชี                                                </a></pre>
                            <pre><a class="subtext" href="PDPA.html">นโยบายด้านการคุ้มครองข้อมูลส่วนบุคคล                                 </a></pre>
                        </div>
                    </div>
                    <li><a class="not" href="contact.html">ติดต่อเรา</a></li>
                    <div class="drop5">
                    <li><a class="not">ข่าวสาร</a></li>
                    <div class="sub5">
                            <pre><a class="subtext" href="news-csr.html">กิจกรรมเพื่อสังคม (CSR)           </a></pre>
                            <pre><a class="subtext" href="activity sgroup.html">กิจกรรมภายในบริษัท           </a></pre>
                            <pre><a class="subtext" href="work-with-us.html">สมัครงาน                     </a></pre>
                        </div>
                    </div>
                    <div class="drop6">
                    <li><a class="not">นักลงทุนสัมพันธ์</a></li>
                    <div class="sub6">
                            <pre><a class="subtext" href="Financial-infor.html">ข้อมูลทางการเงิน            </a></pre>
                            <pre><a class="subtext" href="Investor-Relations.html">ข้อมูลสำหรับผู้ถือหุ้น         </a></pre>
                            <pre><a class="subtext" href="settrade.html">ตารางหุ้น                     </a></pre>
                            <pre><a class="subtext" href="publications.html">เอกสารเผยแพร่              </a></pre>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}
customElements.define('menu-customer',menucustomer)
/*-------------------------------ติดต่อเรา-----------------------------------------------------------------------*/

class menucontact extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =`
            <div class="area1">
                <div class="menu1">
                <div class="menu0">
                    <span><a href="index.html">TH</a></span>
                    <span>I</span>
                    <span><a href="en/index.html">EN</a></span>
                </div>
                    <a href="index.html"><img src="img/SG-Logo.png" alt="logo" ></a>
                    <li><a  class="not" href="index.html">หน้าแรก</a></li>
                    <div class="drop2">
                        <li><a class="not">เกี่ยวกับเรา</a></li>
                        <div class="sub2">
                            <pre><a href="about.html">ประวัติ                          </a></pre>
                            <pre><a href="business-overview.html">ลักษณะการประกอบธุรกิจ               </a></pre>
                            <pre><a href="corporate-governance.html">บรรษัทภิบาล                    </a></pre>
                        </div>   
                    </div>        
                    <div class="drop3">
                        <li><a class="not">ผลิตภัณฑ์</a></li>
                        <div class="sub3">
                        <pre><a href="product-motorcycle-loan.html">สินเชื่อเช่าซื้อรถมอเตอร์ไซค์   </a></pre>
                            <pre><a href="persoloan.html">สินเชื่อส่วนบุคคล               </a></pre>
                        </div>
                    </div>
                    <div class="drop4">
                        <li><a class="not">ลูกค้า</a></li>
                        <div class="sub4">
                            <pre><a class="subtext" href="customer.html">S11 X                                                              </a></pre>
                            <pre><a class="submenu" href="dealer.html">ผู้จัดจำหน่าย                                                           </a></pre>
                            <pre><a class="subtext" href="account-closing.html">ปิดบัญชี                                                     </a></pre>
                            <pre><a class="subtext" href="PDPA.html">นโยบายด้านการคุ้มครองข้อมูลส่วนบุคคล                             </a></pre>
                        </div>
                    </div>
                    <li><a class="here" href="contact.html">ติดต่อเรา</a></li>
                    <div class="drop5">
                    <li><a class="not">ข่าวสาร</a></li>
                    <div class="sub5">
                            <pre><a class="subtext" href="news-csr.html">กิจกรรมเพื่อสังคม (CSR)           </a></pre>
                            <pre><a class="subtext" href="activity sgroup.html">กิจกรรมภายในบริษัท           </a></pre>
                            <pre><a class="subtext" href="work-with-us.html">สมัครงาน                     </a></pre>
                        </div>
                    </div>
                    <div class="drop6">
                    <li><a class="not">นักลงทุนสัมพันธ์</a></li>
                    <div class="sub6">
                            <pre><a class="subtext" href="Financial-infor.html">ข้อมูลทางการเงิน            </a></pre>
                            <pre><a class="subtext" href="Investor-Relations.html">ข้อมูลสำหรับผู้ถือหุ้น         </a></pre>
                            <pre><a class="subtext" href="settrade.html">ตารางหุ้น                     </a></pre>
                            <pre><a class="subtext" href="publications.html">เอกสารเผยแพร่              </a></pre>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}
customElements.define('menu-contact',menucontact)


/*------------------------------------ข่าวสาร--------------------------------------------------------------------*/

class menunews extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =`
            <div class="area1">
                <div class="menu1">
                <div class="menu0">
                    <span><a href="index.html">TH</a></span>
                    <span>I</span>
                    <span><a href="en/index.html">EN</a></span>
                </div>
                    <a href="index.html"><img src="img/SG-Logo.png" alt="logo" ></a>
                    <li><a  class="not" href="index.html">หน้าแรก</a></li>
                    <div class="drop2">
                        <li><a class="not">เกี่ยวกับเรา</a></li>
                        <div class="sub2">
                            <pre><a href="about.html">ประวัติ                          </a></pre>
                            <pre><a href="business-overview.html">ลักษณะการประกอบธุรกิจ               </a></pre>
                            <pre><a href="corporate-governance.html">บรรษัทภิบาล                    </a></pre>
                        </div>  
                    </div>        
                    <div class="drop3">
                        <li><a class="not"  href="#">ผลิตภัณฑ์</a></li>
                        <div class="sub3">
                        <pre><a href="product-motorcycle-loan.html">สินเชื่อเช่าซื้อรถมอเตอร์ไซค์   </a></pre>
                            <pre><a href="persoloan.html">สินเชื่อส่วนบุคคล               </a></pre>
                        </div>
                    </div>
                    <div class="drop4">
                        <li><a class="not">ลูกค้า</a></li>
                        <div class="sub4">
                            <pre><a class="subtext" href="customer.html">S11 X                                                                    </a></pre>
                            <pre><a class="submenu" href="dealer.html">ผู้จัดจำหน่าย                                                                 </a></pre>
                            <pre><a class="subtext" href="account-closing.html">ปิดบัญชี                                                        </a></pre>
                            <pre><a class="subtext" href="PDPA.html">นโยบายด้านการคุ้มครองข้อมูลส่วนบุคคล                             </a></pre>
                        </div>
                    </div>
                    <li><a class="not" href="contact.html">ติดต่อเรา</a></li>
                    <div class="drop5">
                    <li><a class="here" href="#">ข่าวสาร</a></li>
                    <div class="sub5">
                            <pre><a class="subtext" href="news-csr.html">กิจกรรมเพื่อสังคม (CSR)           </a></pre>
                            <pre><a class="subtext" href="activity sgroup.html">กิจกรรมภายในบริษัท           </a></pre>
                            <pre><a class="subtext" href="work-with-us.html">สมัครงาน                     </a></pre>
                        </div>
                    </div>
                    <div class="drop6">
                    <li><a class="not" href="#">นักลงทุนสัมพันธ์</a></li>
                    <div class="sub6">
                            <pre><a class="subtext" href="Financial-infor.html">ข้อมูลทางการเงิน            </a></pre>
                            <pre><a class="subtext" href="Investor-Relations.html">ข้อมูลสำหรับผู้ถือหุ้น         </a></pre>
                            <pre><a class="subtext" href="settrade.html">ตารางหุ้น                     </a></pre>
                            <pre><a class="subtext" href="publications.html">เอกสารเผยแพร่              </a></pre>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}
customElements.define('menu-news',menunews)
/*--------------------------------------------------------------------------------------------------------------*/


/*----------------------------------นักลงทุนสัมพันธ์-------------------------------------------------------------------*/

class menuinvestor extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =`
            <div class="area1">
                <div class="menu1">
                <div class="menu0">
                    <span><a href="index.html">TH</a></span>
                    <span>I</span>
                    <span><a href="en/index.html">EN</a></span>
                </div>
                    <a href="index.html"><img src="img/SG-Logo.png" alt="logo" ></a>
                    <li><a  class="not" href="index.html">หน้าแรก</a></li>
                    <div class="drop2">
                        <li><a class="not">เกี่ยวกับเรา</a></li>
                        <div class="sub2">
                            <pre><a href="about.html">ประวัติ                          </a></pre>
                            <pre><a href="business-overview.html">ลักษณะการประกอบธุรกิจ               </a></pre>
                            <pre><a href="corporate-governance.html">บรรษัทภิบาล                    </a></pre>
                        </div>  
                    </div>        
                    <div class="drop3">
                        <li><a class="not">ผลิตภัณฑ์</a></li>
                        <div class="sub3">
                            <pre><a class="subtext" href="product-motorcycle-loan.html">สินเชื่อเช่าซื้อรถมอเตอร์ไซค์   </a></pre>
                            <pre><a class="subtext" href="persoloan.html">สินเชื่อส่วนบุคคล               </a></pre>
                        </div>
                    </div>
                    <div class="drop4">
                        <li><a class="not">ลูกค้า</a></li>
                        <div class="sub4">
                            <pre><a class="subtext" href="customer.html">S11 X                                                                    </a></pre>
                            <pre><a class="submenu" href="dealer.html">ผู้จัดจำหน่าย                                                                </a></pre>
                            <pre><a class="subtext" href="account-closing.html">ปิดบัญชี                                                       </a></pre>
                            <pre><a class="subtext" href="PDPA.html">นโยบายด้านการคุ้มครองข้อมูลส่วนบุคคล                             </a></pre>
                        </div>
                    </div>
                    <li><a class="not" href="contact.html">ติดต่อเรา</a></li>
                    <div class="drop5">
                    <li><a class="not">ข่าวสาร</a></li>
                    <div class="sub5">
                            <pre><a class="subtext" href="news-csr.html">กิจกรรมเพื่อสังคม (CSR)           </a></pre>
                            <pre><a class="subtext" href="activity sgroup.html">กิจกรรมภายในบริษัท           </a></pre>
                            <pre><a class="subtext" href="work-with-us.html">สมัครงาน                     </a></pre>
                        </div>
                    </div>
                    <div class="drop6">
                    <li><a class="here">นักลงทุนสัมพันธ์</a></li>
                    <div class="sub6">
                            <pre><a class="subtext" href="Financial-infor.html">ข้อมูลทางการเงิน            </a></pre>
                            <pre><a class="subtext" href="Investor-Relations.html">ข้อมูลสำหรับผู้ถือหุ้น         </a></pre>
                            <pre><a class="subtext" href="settrade.html">ตารางหุ้น                     </a></pre>
                            <pre><a class="subtext" href="publications.html">เอกสารเผยแพร่              </a></pre>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}
customElements.define('menu-investor',menuinvestor)
/*--------------------------------------------------------------------------------------------------------------*/


/*------------------------------------------ปุ่มเลื่อนขึ้น-------------------------------------------------------------*/

class menufooter extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =`
        <nav class="ground0">
            <button onclick="topFunction()" id="myBtn" title="เลื่อนขึ้นบน"><span class="material-icons">north</span></button>
        </nav>
        <nav class="ground1">
            <div class="area1">
                <div class="grid">
                    <a href="index.html"><img class="logo" src="img/SG-Logo.png" alt="logo" ></a>
                    <div class="menu1">
                        <p class="p3">ผลิตภัณฑ์</p>
                        <a href="product-motorcycle-loan.html"><p class="p2">สินเชื่อเช่าซื้อรถจักรยานยนต์</p></a>
                        <a href="persoloan.html"><p class="p2">สินเชื่อส่วนบุคคล</p></a>
                        <a href="disclosure.html"><p class="p2">การเปิดเผยข้อมูล</p></a>
                    </div>
                    <div class="menu2">
                        <p class="p1">ดาวน์โหลด S11X</p>
                        <div>
                            <a target="_blank" href="https://apps.apple.com/th/app/s11-x/id1542009136?l=th"><img  class="apple"  src="img/1App store.png"></a>
                        </div>
                        <div>
                            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.s11.x&hl=th"><img class="google" src="img/Play store1-1.png"></a>
                        </div>
                    </div>
                    <div class="menu3">
                        <p class="p3">ติดต่อเรา</p>
                        <p class="p2">สำนักงานใหญ่</p>
                        <p class="p2">บริษัท เอส 11 กรุ๊ป จำกัด (มหาชน)
                        <p class="p2">888 ซ.จตุโชติ 10 ถ.จตุโชติ แขวงออเงิน เขตสายไหม กรุงเทพมหานคร 10220 </p>
                        <p class="p2"><a href="tel:02-022-8888">โทร. 02-022-8888</a></p>
                    </div>
                </div>
            </div>
        </nav>
        `
    }
}
customElements.define('menu-footer',menufooter)
/*--------------------------------------ล่างสุด-----------------------------------------------------------------*/
class menufooterphone extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =`
        <nav class="ground2">
            <div class="area2">
                <div class="grid">
                    <div class="menu1">
                        <p class="p3">ผลิตภัณฑ์</p>
                        <a href="product-motorcycle-loan.html"><p class="p2">สินเชื่อเช่าซื้อรถจักรยานยนต์</p></a>
                        <a href="persoloan.html"><p class="p2">สินเชื่อส่วนบุคคล</p></a>
                        <a href="disclosure.html"><p class="p2">การเปิดเผยข้อมูล</p></a>
                    </div>
                    <div class="menu3">
                        <p class="p3">ติดต่อเรา</p>
                        <p class="p2">สำนักงานใหญ่</p>
                        <p class="p2">บริษัท เอส 11 กรุ๊ป จำกัด (มหาชน)
                        <p class="p2">888 ซ.จตุโชติ 10 ถ.จตุโชติ แขวงออเงิน เขตสายไหม<br>กรุงเทพมหานคร 10220 </p>
                        <p class="p2"><a href="tel:02-022-8888">โทร. 02-022-8888</a></p>
                    </div>
                    <div class="menu2">
                        <p class="p1">ดาวน์โหลด S11X</p>
                        <div>
                            <a target="_blank" href="https://apps.apple.com/th/app/s11-x/id1542009136?l=th"><img  class="apple"  src="img/1App store.png"></a>
                            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.s11.x&hl=th"><img class="google" src="img/Play store1-1.png"></a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        `
    }
}
customElements.define('menu-footer-phone',menufooterphone)



/*-------------------------------------*/



/*-------------------------------------ปุ่มเมนู1(หน้าเผยแพร่ข่าวสาร)----------------------------------------------------------*/

class buttonpublications1 extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =`
        <a class="tablinks1" onclick="openCity1(event, 'pb12023')"id="defaultOpen1">2566  I  2023</a>
        <a class="tablinks1" onclick="openCity1(event, 'pb12022')">2565  I  2022</a>
        <a class="tablinks1" onclick="openCity1(event, 'pb12021')">2564  I  2021</a>
        <a class="tablinks1" onclick="openCity1(event, 'pb12020')">2563  I  2020</a>
        <a class="tablinks1" onclick="openCity1(event, 'pb12019')">2562  I  2019</a>
        <a class="tablinks1" onclick="openCity1(event, 'pb12018')">2561  I  2018</a>
        <a class="tablinks1" onclick="openCity1(event, 'pb12017')">2560  I  2017</a>
        <a class="tablinks1" onclick="openCity1(event, 'pb12016')">2559  I  2016</a>
        <a class="tablinks1" onclick="openCity1(event, 'pb12015')">2558  I  2015</a>
        <a class="tablinks1" onclick="openCity1(event, 'pb12014')">2557  I  2014</a>
        `
    }
}
customElements.define('button-publications1',buttonpublications1)
/*--------------------------------------------------------------------------------------------------------------*/

class buttonpublications2 extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =`
        <a class="tablinks2" onclick="openCity2(event, 'pb22024')" id="defaultOpen2">2567  I  2024</a>
        <a class="tablinks2" onclick="openCity2(event, 'pb22023')">2566  I  2023</a>
        <a class="tablinks2" onclick="openCity2(event, 'pb22022')">2565  I  2022</a>
        <a class="tablinks2" onclick="openCity2(event, 'pb22021')">2564  I  2021</a>
        <a class="tablinks2" onclick="openCity2(event, 'pb22020')">2563  I  2020</a>
        <a class="tablinks2" onclick="openCity2(event, 'pb22019')">2562  I  2019</a>
        <a class="tablinks2" onclick="openCity2(event, 'pb22018')">2561  I  2018</a>
        <a class="tablinks2" onclick="openCity2(event, 'pb22017')">2560  I  2017</a>
        <a class="tablinks2" onclick="openCity2(event, 'pb22016')">2559  I  2016</a>
        <a class="tablinks2" onclick="openCity2(event, 'pb22015')">2558  I  2015</a>
        <a class="tablinks2" onclick="openCity2(event, 'pb22014')">2557  I  2014</a>
        `
    }
}
customElements.define('button-publications2',buttonpublications2)
/*--------------------------------------------------------------------------------------------------------------*/

class buttonpublications3 extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =`
        <a class="tablinks3" onclick="openCity3(event, 'pb32019')"id="defaultOpen3" >2562  I  2019</a>
        <a class="tablinks3" onclick="openCity3(event, 'pb32018')">2561  I  2018</a>
        <a class="tablinks3" onclick="openCity3(event, 'pb32017')">2560  I  2017</a>
        <a class="tablinks3" onclick="openCity3(event, 'pb32016')">2559  I  2016</a>
        `
    }
}
customElements.define('button-publications3',buttonpublications3)


/*--------------------------------------งบการเงิน-----------------------------------------*/

class buttonfinancial1 extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =`
        <a class="tablinks" onclick="openCity(event, '2024')"id="defaultOpen1" >2567  I  2024</a>
        <a class="tablinks" onclick="openCity(event, '2023')">2566  I  2023</a>
        <a class="tablinks" onclick="openCity(event, '2022')">2565  I  2022</a>
        <a class="tablinks" onclick="openCity(event, '2021')">2564  I  2021</a>
        <a class="tablinks" onclick="openCity(event, '2020')">2563  I  2020</a>
        <a class="tablinks" onclick="openCity(event, '2019')">2562  I  2019</a>
        <a class="tablinks" onclick="openCity(event, '2018')">2561  I  2018</a>
        <a class="tablinks" onclick="openCity(event, '2017')">2560  I  2017</a>
        <a class="tablinks" onclick="openCity(event, '2016')">2559  I  2016</a>
        <a class="tablinks" onclick="openCity(event, '2015')">2558  I  2015</a>
        <a class="tablinks" onclick="openCity(event, '2014')">2557  I  2014</a>
        <a class="tablinks" onclick="openCity(event, '2013')">2556  I  2013</a>
        `
    }
}
customElements.define('button-financial1',buttonfinancial1)
/*--------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------เอกสารเผยแพร่//ปุ่มเอกสารหลักทรัพย์----------------------------------------*/

class buttonsetnews1 extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =`
        <a class="tablinks" onclick="openCity(event, '2023')"id="defaultOpen1" >2566  I  2023</a>
        <a class="tablinks" onclick="openCity(event, '2022')">2565  I  2022</a>
        <a class="tablinks" onclick="openCity(event, '2021')">2564  I  2021</a>
        <a class="tablinks" onclick="openCity(event, '2020')">2563  I  2020</a>
        <a class="tablinks" onclick="openCity(event, '2019')">2562  I  2019</a>
        <a class="tablinks" onclick="openCity(event, '2018')">2561  I  2018</a>
        <a class="tablinks" onclick="openCity(event, '2017')">2560  I  2017</a>
        <a class="tablinks" onclick="openCity(event, '2016')">2559  I  2016</a>
        <a class="tablinks" onclick="openCity(event, '2015')">2558  I  2015</a>
        <a class="tablinks" onclick="openCity(event, '2014')">2557  I  2014</a>
        `
    }
}
customElements.define('button-setnews1',buttonsetnews1)
/*--------------------------------------------------------------------------------------------------------------*/
class contactbutton extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =`
        <a class="tablinks" onclick="openCity(event, 'เลือกสาขา') "id="defaultOpen1">เลือกสาขา</a>
        <a class="tablinks" onclick="openCity(event, 'สำนักงานใหญ่')">สำนักงานใหญ่</a>
        <a class="tablinks" onclick="openCity(event, 'สาขาอยุธยา')">สาขาอยุธยา</a>
        <a class="tablinks" onclick="openCity(event, 'สาขาชลบุรี')">สาขาชลบุรี</a>
        <a class="tablinks" onclick="openCity(event, 'สาขาระยอง')">สาขาระยอง</a>
        <a class="tablinks" onclick="openCity(event, 'สาขาจันทบุรี')">สาขาจันทบุรี</a>
        <a class="tablinks" onclick="openCity(event, 'สาขาปราจีนบุรี')">สาขาปราจีนบุรี</a>
        <a class="tablinks" onclick="openCity(event, 'สาขานครราชสีมา')">สาขานครราชสีมา</a>
        <a class="tablinks" onclick="openCity(event, 'สาขาบุรีรัมย์')">สาขาบุรีรัมย์</a>
        <a class="tablinks" onclick="openCity(event, 'สาขานครสวรรค์')">สาขานครสวรรค์</a>
        `
    }
}
customElements.define('contact-button',contactbutton)
/*--------------------------------------------------------------------------------------------------------------*/

class buttonfinancial2 extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =`
        <a class="tablinks2" onclick="openCity2(event, '2567') "id="defaultOpen2" >2567  I  2024</a>
        <a class="tablinks2" onclick="openCity2(event, '2566')">2566  I  2023</a>
        <a class="tablinks2" onclick="openCity2(event, '2565')">2565  I  2022</a>
        <a class="tablinks2" onclick="openCity2(event, '2564')">2564  I  2021</a>
        <a class="tablinks2" onclick="openCity2(event, '2563')">2563  I  2020</a>
        <a class="tablinks2" onclick="openCity2(event, '2562')">2562  I  2019</a>
        <a class="tablinks2" onclick="openCity2(event, '2561')">2561  I  2018</a>
        <a class="tablinks2" onclick="openCity2(event, '2560')">2560  I  2017</a>
        <a class="tablinks2" onclick="openCity2(event, '2559')">2559  I  2016</a>
        <a class="tablinks2" onclick="openCity2(event, '2558')">2558  I  2015</a>
        <a class="tablinks2" onclick="openCity2(event, '2557')">2557  I  2014</a>
        `
    }
}
customElements.define('button-financial2',buttonfinancial2)
/*--------------------------------------------------------------------------------------------------------------*/


/*----------------------------ลอง-------------------------------------------------------------------------------*/

class buttonrelations1 extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =`
        <a class="tablinks2" onclick="openCity2(event, '2567') "id="defaultOpen2" >2567  I  2024</a>
        <a class="tablinks2" onclick="openCity2(event, '2566')">2566  I  2023</a>
        <a class="tablinks2" onclick="openCity2(event, '2565')">2565  I  2022</a>
        <a class="tablinks2" onclick="openCity2(event, '2564')">2564  I  2021</a>
        <a class="tablinks2" onclick="openCity2(event, '2563')">2563  I  2020</a>
        <a class="tablinks2" onclick="openCity2(event, '2562')">2562  I  2019</a>
        <a class="tablinks2" onclick="openCity2(event, '2561')">2561  I  2018</a>
        <a class="tablinks2" onclick="openCity2(event, '2560')">2560  I  2017</a>
        <a class="tablinks2" onclick="openCity2(event, '2559')">2559  I  2016</a>
        <a class="tablinks2" onclick="openCity2(event, '2558')">2558  I  2015</a>
        `
    }
}
customElements.define('button-relations1',buttonrelations1)
/*--------------------------------------------------------------------------------------------------------------*/


/*---------------------------popupmeeting-------------------------------------------------------------------------------*/

class popupmeeting1 extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =`
        <div class="fullpop" id="fullpop">
        <div class="backpop" onclick=" closepopbtn()"></div>
        <div class="popup1">
            <div class="groupth" id="popupth">
                <div class="container">
                    <div class="box1">
                        <div class="close">
                            <button class="material-icons" onclick=" closepopbtn()">cancel</button>
                        </div>
                            <p class="p1">ขอเชิญเข้าร่วมการประชุมสามัญผู้ถือหุ้นประจำปี 2567</p>
                            <p class="p2">บริษัท เอส 11 กรุ๊ป จำกัด (มหาชน)</p>
                            <div class="logos11"><img src="img/SG-Logo.png"></div>
                            <p class="p3">วันพฤหัสบดีที่ 4 เมษายน 2567 เวลา 10.00 น.</p>
                            <p class="p4">ณ ห้องประชุมบริษัท ชั้น 3</p>
                            <p class="p5">เลขที่ 888 ซอยจตุโชติ 10 ถนนจตุโชติ แขวงออเงิน เขตสายไหม กรุงเทพมหานคร 10220</p>
                    </div>
                    <div class="box2">
                        <div class="tabs11">           <!-- ประกาศค่าหัวข้อเมนู -->
                            <button class="button1"> <a href="Investor-Relations1.html">หนังสือนัดประชุมผู้ถือหุ้น</a></button>
                            <button class="button1"> <a href="Financial-infor.html">ข้อมูลทางการเงิน</a></button>
                            <button class="button1"> <a href="publications.html">แบบ 56-1 One Report</a></button>
                        </div>
                        <div class="translate">
                            <button class="button2">TH</button>
                            <span class="solid">I</span>
                            <button class="button2" onclick=" popupth(); ">EN</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="groupen"  id="popupen">
                <div class="container">
                    <div class="en">
                        <div class="box1">
                            <div class="close">
                                <button class="material-icons" onclick=" closepopbtn()">cancel</button>
                            </div>
                            <p class="p1">Invitation to The 2024 Annual General Meeting Of The Shareholders</p>
                            <p class="p2">S11 GROUP PUBLIC COMPANY LIMITED</p>
                            <div class="logos11"><img src="img/SG-Logo.png"></div>
                            <p class="p3">Thursday 4 April 2024 (10.00 a.m.)</p>
                            <p class="p4">Al the meeting room, 3<sup>rd</sup> Floor,</p>
                            <p class="p5">No. 888 Soi.Chatuchot 10, Chatuchot Road, Ao-Ngoen Sub-district, Saimai District, Bangkok 10220</p>
                            <!-- <p class="p5">Bangkok 10220</p> -->
                        </div>
                        <div class="box2">
                            <div class="tabs11">           <!-- ประกาศค่าหัวข้อเมนู -->
                                <button class="button1"> <a href="en/Investor-Relations1-eng.html">Notice of Shareholder's Meeting</a></button>
                                <button class="button1"> <a href="en/Financial-infor-eng.html">Finalcial Information</a></button>
                                <button class="button1"> <a href="en/publications-eng.html">Form 56-1 One Report</a></button>
                            </div>
                            <div class="translate">
                                <button class="button2" onclick=" popupen(); ">TH</button>
                                <span class="solid">I</span>
                                <button class="button2">EN</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
    }
}
customElements.define('popup-meeting1',popupmeeting1)
/*--------------------------------------------------------------------------------------------------------------*/


/*---------------------------popupresolution2023-------------------------------------------------------------------------------*/
class popupresolution2023 extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =`
        <div class="fullpop" id="fullpop">
        <div class="backpop" onclick=" closepopbtn()"></div>
        <div class="popup1">
            <div class="groupth" id="popupth">
                <div class="container">
                    <div class="box0-1">
                        <div class="logos11"><img src="img/SG-Logo.png"></div>
                    </div>

                    <div class="box1">
                        <div class="box0-2">
                            <div class="logos11"><img src="img/SG-Logo.png"></div>
                        </div>
                        <div class="close">
                            <button class="material-icons" onclick=" closepopbtn()">cancel</button>
                        </div>
                            <p class="j1">แจ้งการอนุมัติงบการเงินของบริษัทสำหรับปี 2566</p>
                            <p class="j1-1">สิ้นสุด ณ วันที่ 31 ธันวาคม 2566 และงดจ่ายเงินปันผล</p>
                            <div class="boxscrolling">
                                <div class="scrolling">
                                        <p class="j2">เรียน	ท่านผู้ถือหุ้นของบริษัท เอส 11 กรุ๊ป จำกัด (มหาชน)</p>
                                        <div class="detel-1">
                                            <p class="no">ที่ S11-005/2567</p>
                                            <p class="date-p">วันที่ 9 เมษายน 2567</p>
                                            <p class="j3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ด้วยที่ประชุมสามัญผู้ถือหุ้นประจำปี 2567 เมื่อวันที่ 4 เมษายน 2567 ของ บริษัท เอส 11 กรุ๊ป จำกัด (มหาชน)<br>ได้มีมติเป็นเอกฉันท์ ดังนี้</p>
                                            <p class="j4">1. อนุมัติงบการเงินของบริษัท สำหรับปี 2566 สิ้นสุด ณ วันที่ 31 ธันวาคม 2566 <a href="Financial-infor.html" style="color: #1492E6;">ตามรายละเอียดที่แนบมานี้</a></p>
                                            <p class="j4">2. อนุมัติการงดจัดสรรเงินกำไรเพื่อตั้งสำรองตามกฎหมาย เนื่องจากบริษัทได้สำรองครบเต็มจำนวนตามที่กฎหมายกำหนดเรียบร้อยแล้ว ตั้งแต่รอบปีบัญชี 2560 รวมเป็นทุนสำรองตามกฎหมายจำนวน 61,300,000 บาท หรือคิดเป็นร้อยละ 10 ของทุนจดทะเบียนที่ชำระแล้ว</p>
                                            <p class="j4">3. อนุมัติงดจ่ายเงินปันผลจากผลการดำเนินงานเฉพาะกิจการของบริษัทในปี 2566 สิ้นสุด ณ วันที่ 31 ธันวาคม 2566 เพื่อสำรองเงินไว้ใช้หมุนเวียนในกิจการ และรองรับความไม่แน่นอนของสภาพเศรษฐกิจ</p>
                                        </div>
                                </div>
                            </div>
                    </div>
                            
                </div>
            </div>            
        </div>
    </div>
        `
    }
}
customElements.define('popup-resolution2023',popupresolution2023)
/*--------------------------------------------------------------------------------------------------------------*/



/*---------------------------popupresolution2024-------------------------------------------------------------------------------*/
class popupresolution2024 extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =`
    <div class="fullpop" id="fullpop">
        <div class="backpop" onclick=" closepopbtn()"></div>
        <div class="popup1">
                <div class="groupth" id="popupth">
                    <div class="container">
                        <div class="box0-1">
                            <div class="logos11"><img src="img/SG-Logo.png"></div>
                        </div>
                        <div class="box1">
                            <div class="box0-2">
                                <div class="logos11"><img src="img/SG-Logo.png"></div>
                            </div>
                            <div class="close">
                                <button class="material-icons" onclick=" closepopbtn()">cancel</button>
                            </div>
                            <p class="j1">ขอเชิญผู้ถือหุ้นเสนอระเบียบวาระการประชุมสามัญผู้ถือหุ้นประจำปี 2568</p>
                            <p class="j1">และ/หรือชื่อกรรมการล่วงหน้า</p>
                            <p class="j1-1"></p>
                            <div class="boxscrolling">
                                <div class="scrolling">
                                        <p class="j2"></p>
                                        <div class="detel-1">
                                            <!-- <p class="no">ที่ S11-005/2567</p> -->
                                            <!-- <p class="date-p">วันที่ 9 เมษายน 2567</p> -->
                                            <!-- <p class="j3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ด้วยที่ประชุมสามัญผู้ถือหุ้นประจำปี 2567 เมื่อวันที่ 4 เมษายน 2567 ของ บริษัท เอส 11 กรุ๊ป จำกัด (มหาชน)<br>ได้มีมติเป็นเอกฉันท์ ดังนี้</p> -->
                                            <p class="j4">&nbsp;&nbsp;&nbsp;&nbsp;บริษัท เอส 11 กรุ๊ป จำกัด (มหาชน) (“บริษัท”) ขอเรียนว่า เพื่อให้เป็นไปตามการกำกับดูแลกิจการที่ดีเกี่ยวกับการปฏิบัติต่อผู้ถือหุ้นอย่างเท่าเทียมกัน บริษัทจึงขอเชิญผู้ถือหุ้นเสนอระเบียบวาระการประชุม และ/หรือชื่อบุคคลที่มีคุณสมบัติเหมาะสมเป็นกรรมการบริษัท ในการประชุมสามัญผู้ถือหุ้นประจำปี 2568 เพื่อคณะกรรมการบริษัทพิจารณาบรรจุในระเบียบวาระการประชุม และ/หรือเสนอชื่อบุคคลเพื่อเป็นกรรมการบริษัทเป็นการล่วงหน้าได้ ตั้งแต่วันที่ 1 ตุลาคม 2567 ถึงวันที่ 31 ธันวาคม 2567</p>
                                            <p class="j4">&nbsp;&nbsp;&nbsp;&nbsp;ทั้งนี้ บริษัทได้กำหนดคุณสมบัติของผู้ถือหุ้นที่มีสิทธิเสนอเรื่องให้เป็นไปตามกฎหมายและกฎเกณฑ์ที่บริษัทกำหนด รวมทั้งได้กำหนดหลักเกณฑ์ ขั้นตอน ช่องทางเสนอเรื่อง และรายละเอียดที่เกี่ยวข้องอื่นๆ เพื่อให้การปฏิบัติมีความโปร่งใสและเป็นไปเพื่อประโยชน์ของบริษัทอย่างแท้จริง</p>
                                        </div>
                                </div>
                            </div>

                            <div class="box2">
                                <div class="tabs11">           <!-- ประกาศค่าหัวข้อเมนู -->
                                    <button class="button1"> <a href="Investor-Relations1.html">ข้อเสนอผู้ถือหุ้น</a></button>
                                </div>
                                <div class="translate">
                                    <button class="button2">TH</button>
                                    <span class="solid">I</span>
                                    <button class="button2" onclick=" popupth(); ">EN</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="groupen" id="popupen">
                    <div class="container">
                        <div class="box0-1">
                            <div class="logos11"><img src="img/SG-Logo.png"></div>
                        </div>
                        <div class="box1">
                            <div class="box0-2">
                                <div class="logos11"><img src="img/SG-Logo.png"></div>
                            </div>
                            <div class="close">
                                <button class="material-icons" onclick=" closepopbtn()">cancel</button>
                            </div>
                            <p class="j1" style="font-size: 20px;">Invitation to shareholders to propose the 2025 Annual General Meetings of Shareholders’</p>
                            <p class="j1" style="font-size: 20px;">agendas and/or names of director nominees in advance</p>
                            <p class="j1-1"></p>
                            <div class="boxscrolling">
                                <div class="scrolling">
                                        <p class="j2"></p>
                                        <div class="detel-1">
                                            <!-- <p class="no">ที่ S11-005/2567</p> -->
                                            <!-- <p class="date-p">วันที่ 9 เมษายน 2567</p> -->
                                            <!-- <p class="j3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ด้วยที่ประชุมสามัญผู้ถือหุ้นประจำปี 2567 เมื่อวันที่ 4 เมษายน 2567 ของ บริษัท เอส 11 กรุ๊ป จำกัด (มหาชน)<br>ได้มีมติเป็นเอกฉันท์ ดังนี้</p> -->
                                            <p class="j4"style="font-size: 14px;">&nbsp;&nbsp;&nbsp;&nbsp;S11 Group Public Company Limited (“the Company”) would like to inform that, according to the good corporate governance regarding the equitable treatment of shareholders, the Company would like to invite the shareholders to propose the agendas and/or qualified candidates to be elected as the Company’s Board of Directors at the 2025 Annual General Meetings of Shareholders for the Board of Directors’ consideration to include the items in the meeting’s agenda and/or nominate the candidates to be elected as the Company’s Board of Directors in advance. The period for such proposal is between 1 October 2024 and 31 December 2024.</p>
                                            <p class="j4"style="font-size: 14px;">&nbsp;&nbsp;&nbsp;&nbsp;The shareholders eligible to make the proposal are required by laws and the Company’s regulations. The criteria, procedures, submission channel, and other related details stipulated to ensure the transparency and that the decision is made upon the Company’s benefit.</p>
                                            <p class="j4"></p>
                                        </div>
                                </div>
                            </div>

                            <div class="box2">
                                <div class="tabs11">           <!-- ประกาศค่าหัวข้อเมนู -->
                                    <button class="button1"> <a href="../en/Investor-Relations1-eng.html">Shareholder Proposal</a></button>
                                </div>
                                <div class="translate">
                                    <button class="button2" onclick=" popupen(); ">TH</button>
                                    <span class="solid">I</span>
                                    <button class="button2">EN</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    </div>
        `
    }
}
customElements.define('popup-resolution2024',popupresolution2024)
/*--------------------------------------------------------------------------------------------------------------*/