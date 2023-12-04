const data = {
    items: [
        {
            id: 1,
            cate: "responsive",
            year: "2023",
            img: "/images/work/img_proj28.png",
            title: "에이엔테크놀로지",
            project: "에이엔테크놀로지 사이트 구축",
            summary: "메인 / 퍼블리싱 단독작업 / 반응형웹",
            url: "http://www.antech.kr",
            important: false,
            tag: ["#responsive"],
            detail: ""
        },
        {
            id: 2,
            cate: "responsive",
            year: "2022",
            img: "/images/work/img_proj27.png",
            title: "서울대공대여성동창회",
            project: "서울대공대여성동창회 사이트 구축 및 운영",
            summary: "메인 / 퍼블리싱 단독작업 / 반응형웹",
            url: "https://winns.snu.ac.kr",
            important: false,
            tag: ["#responsive"],
            detail: ""       
        },
        {
            id: 3,
            cate: "responsive",
            year: "2022",
            img: "/images/work/img_proj26.png",
            title: "빵준서라운지",
            project: "빵준서라운지 사이트 구축 및 운영",
            summary: "메인 / 퍼블리싱 단독작업 / 반응형웹",
            url: "https://www.bbangjunseo.com",
            important: false,
            tag: ["#responsive", "#scss", "#bem"],
            detail: ""
        },
        {
            id: 4,
            cate: "responsive",
            year: "2021",
            img: "/images/work/img_proj25.png",
            title: "demasian 브랜드사이트",
            project: "demasian 브랜드사이트 구축 및 운영",
            summary: "메인 / 퍼블리싱 단독작업 / 반응형웹",
            url: "https://www.demasian.com",
            important: false,
            tag: ["#responsive", "#scss"],
            detail: ""
        },
        {
            id: 5,
            cate: "responsive",
            year: "2023 - 2021",
            img: "/images/work/img_proj24.png",
            title: "웨비나 - 기아인사이트",
            project: "웨비나 - 기아인사이트 운영",
            summary: "메인 / 퍼블리싱 단독작업 / 반응형웹 / vue.js 퍼블리싱",
            url: "https://www.transformationkia.com/test",
            important: false,
            tag: ["#responsive", "#vue.js"],
            detail: ""
        },
        {
            id: 6,
            cate: "responsive",
            year: "2023-2021",
            img: "/images/work/img_proj23.png",
            title: "마켓센스 쇼핑몰",
            project: "마켓센스 쇼핑몰 구축 및 운영",
            summary: "메인 / 퍼블리싱 단독작업 / 반응형웹",
            url: "https://mkss.app",
            important: true,
            tag: ["#responsive", "#scss"],
            detail: "누구나 쇼핑몰을 개설할 수 있고, 쇼핑을 하면 후원이 되는 후원 플랫폼입니다. UX/UI를 논의하기 위해 Zeplin을 활용했습니다. 퍼블리싱 파트를 전담하여 scss를 이용한 UI 개발을 진행했습니다. 개인 취향을 고려한 쇼핑몰 테마(컬러) 선택 기능을 넣었고, 반응형 UI를 적용하여 결과물의 완성도를 높였습니다."
        },
        {
            id: 7,
            cate: "adaptive",
            year: "2023-2021",
            img: "/images/work/img_proj22.png",
            title: "데마시안샵 쇼핑몰",
            project: "데마시안샵 쇼핑몰 운영",
            summary: "메인 / 퍼블리싱 단독작업 / PC, 모바일 적응형웹",
            url: "https://www.dmsn.tv/shop",
            important: false,
            tag: ["#pc", "#mobile"],
            detail: ""
        },
        {
            id: 8,
            cate: "responsive",
            year: "2022-2021",
            img: "/images/work/img_proj21.png",
            title: "영월청년사업단",
            project: "영월청년사업단 사이트 구축",
            summary: "메인 / 퍼블리싱 단독작업 / 반응형웹",
            url: "https://www.yw.go.kr/youth/",
            important: false,
            tag: ["#responsive"],
            detail: ""
        },
        {
            id: 9,
            cate: "mobile",
            year: "2021-2020",
            img: "/images/work/img_proj20.png",
            title: "비너스이숍 모바일앱",
            project: "비너스이숍 모바일앱 리뉴얼",
            summary: "메인 / 퍼블리싱 단독작업 / 하이브리드앱",
            // url: "https://github.com/gwonminji/mobile-eshop",
            url: "",
            important: true,
            tag: ["#hybrid app", "#webview"],
            detail: "비너스 브랜드의 자사 쇼핑몰 어플리케이션입니다. 기존 서비스의 디자인 리뉴얼 프로젝트로 하이브리드앱 웹뷰 퍼블리싱 파트를 전담하여 UI 개발 업무를 맡았습니다. 오랫동안 운영되어 온 서비스였던 만큼 레거시 코드를 걷어내고 개선하는 작업들이 많이 필요했습니다."
        },
        {
            id: 10,
            cate: "pc",
            year: "",
            img: "/images/work/img_proj19.jpg",
            title: "삼성카드 S-EDTS 시스템",
            project: "삼성카드 S-EDTS 시스템 고도화",
            summary: "메인 / 퍼블리싱 단독작업 / PC웹",
            url: "",
            important: false,
            tag: ["#pc"],
            detail: ""
        },
        {
            id: 11,
            cate: "pc",
            year: "",
            img: "/images/work/img_proj18.jpg",
            title: "교보생명 GreenT 시스템",
            project: "교보생명 GreenT 시스템 고도화",
            summary: "메인 / 퍼블리싱 단독작업 / PC웹",
            url: "",
            important: false,
            tag: ["#pc"],
            detail: ""
        },
        {
            id: 12,
            cate: "responsive",
            year: "2020-2019",
            img: "/images/work/img_proj17.png",
            title: "삼성증권 회사소개 홈페이지",
            project: "삼성증권 회사소개 홈페이지 리뉴얼",
            summary: "서브 / 퍼블리싱 참여도 80% / 국·영문 반응형웹 / 웹와치 웹접근성 인증마크 획득",
            url: "https://www.samsungsecurities.co.kr/kor/main.do",
            important: true,
            tag: ["#responsive", "#웹접근성 인증마크"],
            detail: "삼성증권을 소개하기 위한 웹사이트입니다. 메인 페이지 진입 시 fullpage.js를 사용한 스크롤 인터랙션을 통해 사용자의 이목을 끌고 흥미를 유지하여 콘텐츠에 집중할 수 있게 합니다. 국/영문 반응형 UI를 적용했습니다. 또한 웹접근성 인증마크를 필수로 획득해야하는 프로젝트였고, 웹와치 접근성 인증마크 획득으로 결과물의 완성도를 높였습니다."
        },
        {
            id: 13,
            cate: "pc",
            year: "",
            img: "/images/work/img_proj16.jpg",
            title: "SKT CDTS 시스템",
            project: "SKT CDTS 시스템 고도화",
            summary: "메인 / 퍼블리싱 단독작업 / PC웹 / Bootstrap",
            url: "",
            important: false,
            tag: ["#pc"],
            detail: ""
        },
        {
            id: 14,
            cate: "pc",
            year: "",
            img: "/images/work/img_proj15.jpg",
            title: "삼성증권 회의실예약 시스템",
            project: "삼성증권 회의실예약 시스템 구축",
            summary: "메인 / 퍼블리싱 단독작업 / PC웹",
            url: "",
            important: false,
            tag: ["#pc"],
            detail: ""
        },
        {
            id: 15,
            cate: "pc",
            year: "",
            img: "/images/work/img_proj14.jpg",
            title: "삼성증권 CreaTV 사이트",
            project: "삼성증권 CreaTV 사이트 리뉴얼",
            summary: "메인 / 퍼블리싱 단독작업 / PC웹",
            url: "",
            important: false,
            tag: ["#pc"],
            detail: ""
        },
        {
            id: 16,
            cate: "pc",
            year: "",
            img: "/images/work/img_proj13.jpg",
            title: "라이나생명 PIOMS",
            project: "라이나생명 PIOMS 리뉴얼",
            summary: "메인 / 퍼블리싱 단독작업 / PC웹",
            url: "",
            important: false,
            tag: ["#pc"],
            detail: ""
        },
        {
            id: 17,
            cate: "pc",
            year: "",
            img: "/images/work/img_proj12.jpg",
            title: "일진 전자전표 솔루션",
            project: "일진 전자전표 솔루션 구축",
            summary: "메인 / 퍼블리싱 단독작업 / PC웹 / Bulma css / dhtmlx grid",
            url: "",
            important: false,
            tag: ["#pc", "#bulma css", "#dhtmlx grid"],
            detail: ""
        },
        {
            id: 18,
            cate: "pc",
            year: "",
            img: "/images/work/img_proj11.jpg",
            title: "삼성증권 행복마루 커뮤니티",
            project: "삼성증권 행복마루 커뮤니티 리뉴얼",
            summary: "서브 / 퍼블리싱 참여도 50% / PC웹",
            url: "",
            important: false,
            tag: ["#pc"],
            detail: ""
        },
        {
            id: 19,
            cate: "responsive",
            year: "",
            img: "/images/work/img_proj10.png",
            title: "한국금융IT 한국가상화폐거래소 KOVEX 홍보 사이트",
            project: "한국금융IT 한국가상화폐거래소 KOVEX 홍보 사이트 구축",
            summary: "메인 / 퍼블리싱 단독작업 / 반응형웹",
            url: "",
            important: false,
            tag: ["#responsive"],
            detail: ""
        },
        {
            id: 20,
            cate: "pc",
            year: "",
            img: "/images/work/img_proj9.jpg",
            title: "대우건설 공공데이터 활용 시스템",
            project: "대우건설 공공데이터 활용 시스템 구축",
            summary: "메인 / 퍼블리싱 단독작업 / PC웹 / 공공데이터 기반 지도연계 및 부동산 정보 제공",
            url: "",
            important: false,
            tag: ["#pc"],
            detail: ""
        },
        {
            id: 21,
            cate: "responsive",
            year: "",
            img: "/images/work/img_proj8.jpg",
            title: "SK 브로드밴드 위협인텔리전스 시스템",
            project: "SK 브로드밴드 위협인텔리전스 시스템 리뉴얼",
            summary: "메인 / 퍼블리싱 단독작업 / 반응형웹 / Bootstrap / ChartJS",
            url: "",
            important: false,
            tag: ["#responsive", "#bootstrap", "#chart.js"],
            detail: ""
        },
        {
            id: 22,
            cate: "pc",
            year: "",
            img: "/images/work/img_proj7.jpg",
            title: "SK Aibril Engage System",
            project: "SK Aibril Engage System 구축",
            summary: "메인 / 퍼블리싱 단독작업 / PC웹 / Bootstrap",
            url: "",
            important: false,
            tag: ["#pc"],
            detail: ""
        },
        {
            id: 23,
            cate: "responsive",
            year: "",
            img: "/images/work/img_proj6.png",
            title: "투씨엘시스템 BizCloud",
            project: "투씨엘시스템 BizCloud 리뉴얼",
            summary: "메인 / 퍼블리싱 단독작업 / 반응형웹 / Bootstrap",
            url: "",
            important: false,
            tag: ["#responsive", "#bootstrap"],
            detail: ""
        },
        {
            id: 24,
            cate: "responsive",
            year: "",
            img: "/images/work/img_proj5.png",
            title: "KORAIL 스마트 학사관리 시스템 인재개발원",
            project: "KORAIL 스마트 학사관리 시스템 인재개발원 리뉴얼",
            summary: "서브 / 퍼블리싱 참여도 50% / 반응형웹",
            url: "http://cyber.korail.com/front",
            important: false,
            tag: ["#responsive"],
            detail: ""
        },
        {
            id: 25,
            cate: "pc",
            year: "",
            img: "/images/work/img_proj4.jpg",
            title: "KORAIL 스마트 학사관리 시스템 적성검사",
            project: "KORAIL 스마트 학사관리 시스템 적성검사 구축",
            summary: "서브 / 퍼블리싱 참여도 50% / PC웹",
            url: "https://kra.korail.com",
            important: false,
            tag: ["#pc"],
            detail: ""
        },
        {
            id: 26,
            cate: "responsive",
            year: "",
            img: "/images/work/img_proj3.png",
            title: "국기원 사이버 연수원",
            project: "국기원 사이버 연수원 리뉴얼",
            summary: "메인 / 퍼블리싱 단독작업 / 국·영문 반응형웹",
            url: "http://wta.kukkiwon.or.kr/kr",
            important: false,
            tag: ["#responsive"],
            detail: ""
        },
        {
            id: 27,
            cate: "adaptive",
            year: "",
            img: "/images/work/img_proj2.png",
            title: "KNA 대한간호협회 회원등록센터",
            project: "KNA 대한간호협회 회원등록센터 리뉴얼",
            summary: "서브 / 퍼블리싱 참여도 50% / PC, 모바일 적응형웹 / print css",
            url: "http://membership.koreanurse.or.kr",
            important: false,
            tag: ["#pc", "#mobile"],
            detail: ""
        },
        {
            id: 28,
            cate: "adaptive",
            year: "",
            img: "/images/work/img_proj1.png",
            title: "KNA 대한간호협회 면허신고센터",
            project: "KNA 대한간호협회 면허신고센터 리뉴얼",
            summary: "서브 / 퍼블리싱 참여도 40% / PC, 모바일 적응형웹",
            url: "http://lic.kna.or.kr/lic/user/main.do",
            important: false,
            tag: ["#pc", "#mobile"],
            detail: ""
        }
    ]
};

export default data;