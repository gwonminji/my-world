const data = {
    items: [
        {
            id: 1,
            cate: "responsive",
            img: "https://m.media-amazon.com/images/I/61icbTpCVgL.jpg",
            title: "텍스트 텍스트텍스트텍스트 테스트",
            summary: "ㅁㅁ / ㅁㅁㅁㅁ ㅁㅁㅁㅁ / ㅁㅁㅁㅁ",
            url: "",
            important: false
        },
        {
            id: 2,
            cate: "adaptive",
            img: "https://m.media-amazon.com/images/I/61icbTpCVgL.jpg",
            title: "텍스트 텍스트텍스트텍스트 테스트",
            summary: "ㅁㅁ / ㅁㅁㅁㅁ ㅁㅁㅁㅁ / ㅁㅁㅁㅁ",
            url: "",
            important: false
        },
        {
            id: 3,
            cate: "pc",
            img: "https://m.media-amazon.com/images/I/61icbTpCVgL.jpg",
            title: "텍스트 텍스트텍스트텍스트 테스트",
            summary: "ㅁㅁ / ㅁㅁㅁㅁ ㅁㅁㅁㅁ / ㅁㅁㅁㅁ",
            url: "",
            important: true
        },
        {
            id: 4,
            cate: "pc",
            img: "https://m.media-amazon.com/images/I/61icbTpCVgL.jpg",
            title: "텍스트 텍스트텍스트텍스트 테스트",
            summary: "ㅁㅁ / ㅁㅁㅁㅁ ㅁㅁㅁㅁ / ㅁㅁㅁㅁ",
            url: "",
            important: true
        },
        {
            id: 5,
            cate: "mobile",
            img: "https://m.media-amazon.com/images/I/61icbTpCVgL.jpg",
            title: "텍스트 텍스트텍스트텍스트 테스트",
            summary: "ㅁㅁ / ㅁㅁㅁㅁ ㅁㅁㅁㅁ / ㅁㅁㅁㅁ",
            url: "",
            important: true
        },

        // {
        //     id: 1,
        //     cate: "responsive",
        //     img: "https://m.media-amazon.com/images/I/61icbTpCVgL.jpg",
        //     title: "에이엔테크놀로지 사이트 구축",
        //     summary: "메인 / 퍼블리싱 단독작업 / 반응형웹",
        //     url: "http://www.antech.kr",
        //     important: false
        // },
        // {
        //     id: 2,
        //     cate: "responsive",
        //     img: "https://images.unsplash.com/photo-1547731030-cd126f44e9c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1hY2Jvb2t8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=200&q=75",
        //     title: "서울대공대여성동창회 사이트 구축 및 운영",
        //     summary: "메인 / 퍼블리싱 단독작업 / 반응형웹",
        //     url: "https://winns.snu.ac.kr",
        //     important: false       
        // },
        // {
        //     id: 3,
        //     cate: "responsive",
        //     img: "https://media.istockphoto.com/id/640970604/ko/%EC%82%AC%EC%A7%84/%EB%B0%94%EB%8B%A4-%EC%84%B8%EB%A1%9C-%EC%82%AC%EC%A7%84-%EC%9D%BC%EC%B6%9C.jpg?s=170667a&w=0&k=20&c=z0FzfG7OR3s17v1sNIp7j1eotJwK-pSRKwosUJS_35E=",
        //     title: "빵준서라운지 사이트 구축 및 운영",
        //     summary: "메인 / 퍼블리싱 단독작업 / 반응형웹",
        //     url: "https://www.bbangjunseo.com",
        //     important: false
        // },
        // {
        //     id: 4,
        //     cate: "responsive",
        //     img: "https://media.istockphoto.com/id/640970604/ko/%EC%82%AC%EC%A7%84/%EB%B0%94%EB%8B%A4-%EC%84%B8%EB%A1%9C-%EC%82%AC%EC%A7%84-%EC%9D%BC%EC%B6%9C.jpg?s=170667a&w=0&k=20&c=z0FzfG7OR3s17v1sNIp7j1eotJwK-pSRKwosUJS_35E=",
        //     title: "demasian 브랜드사이트 구축 및 운영",
        //     summary: "메인 / 퍼블리싱 단독작업 / 반응형웹",
        //     url: "https://www.demasian.com",
        //     important: false
        // },
        // {
        //     id: 5,
        //     cate: "responsive",
        //     img: "https://media.istockphoto.com/id/640970604/ko/%EC%82%AC%EC%A7%84/%EB%B0%94%EB%8B%A4-%EC%84%B8%EB%A1%9C-%EC%82%AC%EC%A7%84-%EC%9D%BC%EC%B6%9C.jpg?s=170667a&w=0&k=20&c=z0FzfG7OR3s17v1sNIp7j1eotJwK-pSRKwosUJS_35E=",
        //     title: "웨비나 - 기아인사이트 운영",
        //     summary: "메인 / 퍼블리싱 단독작업 / 반응형웹 / vue.js 퍼블리싱",
        //     url: "https://www.transformationkia.com/test",
        //     important: false
        // },
        // {
        //     id: 6,
        //     cate: "responsive",
        //     img: "https://media.istockphoto.com/id/640970604/ko/%EC%82%AC%EC%A7%84/%EB%B0%94%EB%8B%A4-%EC%84%B8%EB%A1%9C-%EC%82%AC%EC%A7%84-%EC%9D%BC%EC%B6%9C.jpg?s=170667a&w=0&k=20&c=z0FzfG7OR3s17v1sNIp7j1eotJwK-pSRKwosUJS_35E=",
        //     title: "마켓센스 쇼핑몰 구축 및 운영",
        //     summary: "메인 / 퍼블리싱 단독작업 / 반응형웹",
        //     url: "https://mkss.app",
        //     important: true
        // },
        // {
        //     id: 7,
        //     cate: "adaptive",
        //     img: "https://media.istockphoto.com/id/640970604/ko/%EC%82%AC%EC%A7%84/%EB%B0%94%EB%8B%A4-%EC%84%B8%EB%A1%9C-%EC%82%AC%EC%A7%84-%EC%9D%BC%EC%B6%9C.jpg?s=170667a&w=0&k=20&c=z0FzfG7OR3s17v1sNIp7j1eotJwK-pSRKwosUJS_35E=",
        //     title: "데마시안샵 쇼핑몰 운영",
        //     summary: "메인 / 퍼블리싱 단독작업 / PC, 모바일 적응형웹",
        //     url: "https://www.dmsn.tv/shop",
        //     important: false
        // },
        // {
        //     id: 8,
        //     cate: "responsive",
        //     img: "https://media.istockphoto.com/id/640970604/ko/%EC%82%AC%EC%A7%84/%EB%B0%94%EB%8B%A4-%EC%84%B8%EB%A1%9C-%EC%82%AC%EC%A7%84-%EC%9D%BC%EC%B6%9C.jpg?s=170667a&w=0&k=20&c=z0FzfG7OR3s17v1sNIp7j1eotJwK-pSRKwosUJS_35E=",
        //     title: "영월청년사업단 사이트 구축",
        //     summary: "메인 / 퍼블리싱 단독작업 / 반응형웹",
        //     url: "https://www.yw.go.kr/youth/",
        //     important: false
        // },
        // {
        //     id: 9,
        //     cate: "mobile",
        //     img: "https://media.istockphoto.com/id/640970604/ko/%EC%82%AC%EC%A7%84/%EB%B0%94%EB%8B%A4-%EC%84%B8%EB%A1%9C-%EC%82%AC%EC%A7%84-%EC%9D%BC%EC%B6%9C.jpg?s=170667a&w=0&k=20&c=z0FzfG7OR3s17v1sNIp7j1eotJwK-pSRKwosUJS_35E=",
        //     title: "비너스이숍 모바일앱 리뉴얼",
        //     summary: "메인 / 퍼블리싱 단독작업 / 하이브리드앱",
        //     url: "https://github.com/gwonminji/mobile-eshop",
        //     important: true
        // },
        // {
        //     id: 10,
        //     cate: "pc",
        //     img: "https://media.istockphoto.com/id/640970604/ko/%EC%82%AC%EC%A7%84/%EB%B0%94%EB%8B%A4-%EC%84%B8%EB%A1%9C-%EC%82%AC%EC%A7%84-%EC%9D%BC%EC%B6%9C.jpg?s=170667a&w=0&k=20&c=z0FzfG7OR3s17v1sNIp7j1eotJwK-pSRKwosUJS_35E=",
        //     title: "삼성카드 S-EDTS 시스템 고도화",
        //     summary: "메인 / 퍼블리싱 단독작업 / PC웹",
        //     url: "",
        //     important: false
        // },
        // {
        //     id: 11,
        //     cate: "pc",
        //     img: "https://media.istockphoto.com/id/640970604/ko/%EC%82%AC%EC%A7%84/%EB%B0%94%EB%8B%A4-%EC%84%B8%EB%A1%9C-%EC%82%AC%EC%A7%84-%EC%9D%BC%EC%B6%9C.jpg?s=170667a&w=0&k=20&c=z0FzfG7OR3s17v1sNIp7j1eotJwK-pSRKwosUJS_35E=",
        //     title: "교보생명 GreenT시스템 고도화",
        //     summary: "메인 / 퍼블리싱 단독작업 / PC웹",
        //     url: "",
        //     important: false
        // },
        // {
        //     id: 12,
        //     cate: "responsive",
        //     img: "https://media.istockphoto.com/id/640970604/ko/%EC%82%AC%EC%A7%84/%EB%B0%94%EB%8B%A4-%EC%84%B8%EB%A1%9C-%EC%82%AC%EC%A7%84-%EC%9D%BC%EC%B6%9C.jpg?s=170667a&w=0&k=20&c=z0FzfG7OR3s17v1sNIp7j1eotJwK-pSRKwosUJS_35E=",
        //     title: "삼성증권 회사소개 홈페이지 리뉴얼",
        //     summary: "서브 / 퍼블리싱 참여도 80% / 국·영문 반응형웹 / 웹와치 웹접근성 인증마크 획득",
        //     url: "https://www.samsungsecurities.co.kr/kor/main.do",
        //     important: true
        // },
        // {
        //     id: 13,
        //     cate: "pc",
        //     img: "https://media.istockphoto.com/id/640970604/ko/%EC%82%AC%EC%A7%84/%EB%B0%94%EB%8B%A4-%EC%84%B8%EB%A1%9C-%EC%82%AC%EC%A7%84-%EC%9D%BC%EC%B6%9C.jpg?s=170667a&w=0&k=20&c=z0FzfG7OR3s17v1sNIp7j1eotJwK-pSRKwosUJS_35E=",
        //     title: "SKT CDTS 시스템 고도화",
        //     summary: "메인 / 퍼블리싱 단독작업 / PC웹 / Bootstrap",
        //     url: "",
        //     important: false
        // },
        // {
        //     id: 14,
        //     cate: "pc",
        //     img: "https://media.istockphoto.com/id/640970604/ko/%EC%82%AC%EC%A7%84/%EB%B0%94%EB%8B%A4-%EC%84%B8%EB%A1%9C-%EC%82%AC%EC%A7%84-%EC%9D%BC%EC%B6%9C.jpg?s=170667a&w=0&k=20&c=z0FzfG7OR3s17v1sNIp7j1eotJwK-pSRKwosUJS_35E=",
        //     title: "삼성증권 회의실예약 시스템 구축",
        //     summary: "메인 / 퍼블리싱 단독작업 / PC웹",
        //     url: "",
        //     important: false
        // },
        // {
        //     id: 15,
        //     cate: "pc",
        //     img: "https://media.istockphoto.com/id/640970604/ko/%EC%82%AC%EC%A7%84/%EB%B0%94%EB%8B%A4-%EC%84%B8%EB%A1%9C-%EC%82%AC%EC%A7%84-%EC%9D%BC%EC%B6%9C.jpg?s=170667a&w=0&k=20&c=z0FzfG7OR3s17v1sNIp7j1eotJwK-pSRKwosUJS_35E=",
        //     title: "삼성증권 CreaTV 사이트 리뉴얼",
        //     summary: "메인 / 퍼블리싱 단독작업 / PC웹",
        //     url: "",
        //     important: false
        // },
        // {
        //     id: 16,
        //     cate: "pc",
        //     img: "https://media.istockphoto.com/id/640970604/ko/%EC%82%AC%EC%A7%84/%EB%B0%94%EB%8B%A4-%EC%84%B8%EB%A1%9C-%EC%82%AC%EC%A7%84-%EC%9D%BC%EC%B6%9C.jpg?s=170667a&w=0&k=20&c=z0FzfG7OR3s17v1sNIp7j1eotJwK-pSRKwosUJS_35E=",
        //     title: "라이나생명 PIOMS 리뉴얼",
        //     summary: "메인 / 퍼블리싱 단독작업 / PC웹",
        //     url: "",
        //     important: false
        // },
        // {
        //     id: 17,
        //     cate: "pc",
        //     img: "https://media.istockphoto.com/id/640970604/ko/%EC%82%AC%EC%A7%84/%EB%B0%94%EB%8B%A4-%EC%84%B8%EB%A1%9C-%EC%82%AC%EC%A7%84-%EC%9D%BC%EC%B6%9C.jpg?s=170667a&w=0&k=20&c=z0FzfG7OR3s17v1sNIp7j1eotJwK-pSRKwosUJS_35E=",
        //     title: "일진 전자전표 솔루션 구축",
        //     summary: "메인 / 퍼블리싱 단독작업 / PC웹 / Bulma css / dhtmlx grid",
        //     url: "",
        //     important: false
        // },
        // {
        //     id: 18,
        //     cate: "pc",
        //     img: "https://media.istockphoto.com/id/640970604/ko/%EC%82%AC%EC%A7%84/%EB%B0%94%EB%8B%A4-%EC%84%B8%EB%A1%9C-%EC%82%AC%EC%A7%84-%EC%9D%BC%EC%B6%9C.jpg?s=170667a&w=0&k=20&c=z0FzfG7OR3s17v1sNIp7j1eotJwK-pSRKwosUJS_35E=",
        //     title: "삼성증권 행복마루 커뮤니티 리뉴얼",
        //     summary: "서브 / 퍼블리싱 참여도 50% / PC웹",
        //     url: "",
        //     important: false
        // },
        // {
        //     id: 19,
        //     cate: "responsive",
        //     img: "https://media.istockphoto.com/id/640970604/ko/%EC%82%AC%EC%A7%84/%EB%B0%94%EB%8B%A4-%EC%84%B8%EB%A1%9C-%EC%82%AC%EC%A7%84-%EC%9D%BC%EC%B6%9C.jpg?s=170667a&w=0&k=20&c=z0FzfG7OR3s17v1sNIp7j1eotJwK-pSRKwosUJS_35E=",
        //     title: "한국금융IT 한국가상화폐거래소 KOVEX 홍보 사이트 구축",
        //     summary: "메인 / 퍼블리싱 단독작업 / 반응형웹",
        //     url: "",
        //     important: false
        // },
        // {
        //     id: 20,
        //     cate: "pc",
        //     img: "https://media.istockphoto.com/id/640970604/ko/%EC%82%AC%EC%A7%84/%EB%B0%94%EB%8B%A4-%EC%84%B8%EB%A1%9C-%EC%82%AC%EC%A7%84-%EC%9D%BC%EC%B6%9C.jpg?s=170667a&w=0&k=20&c=z0FzfG7OR3s17v1sNIp7j1eotJwK-pSRKwosUJS_35E=",
        //     title: "대우건설 공공데이터 활용 시스템 구축",
        //     summary: "메인 / 퍼블리싱 단독작업 / PC웹 / 공공데이터 기반 지도연계 및 부동산 정보 제공",
        //     url: "",
        //     important: false
        // },
        // {
        //     id: 21,
        //     cate: "responsive",
        //     img: "https://media.istockphoto.com/id/640970604/ko/%EC%82%AC%EC%A7%84/%EB%B0%94%EB%8B%A4-%EC%84%B8%EB%A1%9C-%EC%82%AC%EC%A7%84-%EC%9D%BC%EC%B6%9C.jpg?s=170667a&w=0&k=20&c=z0FzfG7OR3s17v1sNIp7j1eotJwK-pSRKwosUJS_35E=",
        //     title: "SK 브로드밴드 위협인텔리전스 시스템 리뉴얼",
        //     summary: "메인 / 퍼블리싱 단독작업 / 반응형웹 / Bootstrap / ChartJS",
        //     url: "",
        //     important: false
        // },
        // {
        //     id: 22,
        //     cate: "pc",
        //     img: "https://media.istockphoto.com/id/640970604/ko/%EC%82%AC%EC%A7%84/%EB%B0%94%EB%8B%A4-%EC%84%B8%EB%A1%9C-%EC%82%AC%EC%A7%84-%EC%9D%BC%EC%B6%9C.jpg?s=170667a&w=0&k=20&c=z0FzfG7OR3s17v1sNIp7j1eotJwK-pSRKwosUJS_35E=",
        //     title: "SK Aibril Engage System 구축",
        //     summary: "메인 / 퍼블리싱 단독작업 / PC웹 / Bootstrap",
        //     url: "",
        //     important: false
        // },
        // {
        //     id: 23,
        //     cate: "responsive",
        //     img: "https://media.istockphoto.com/id/640970604/ko/%EC%82%AC%EC%A7%84/%EB%B0%94%EB%8B%A4-%EC%84%B8%EB%A1%9C-%EC%82%AC%EC%A7%84-%EC%9D%BC%EC%B6%9C.jpg?s=170667a&w=0&k=20&c=z0FzfG7OR3s17v1sNIp7j1eotJwK-pSRKwosUJS_35E=",
        //     title: "투씨엘시스템 BizCloud 리뉴얼",
        //     summary: "메인 / 퍼블리싱 단독작업 / 반응형웹 / Bootstrap",
        //     url: "",
        //     important: false
        // },
        // {
        //     id: 24,
        //     cate: "responsive",
        //     img: "https://media.istockphoto.com/id/640970604/ko/%EC%82%AC%EC%A7%84/%EB%B0%94%EB%8B%A4-%EC%84%B8%EB%A1%9C-%EC%82%AC%EC%A7%84-%EC%9D%BC%EC%B6%9C.jpg?s=170667a&w=0&k=20&c=z0FzfG7OR3s17v1sNIp7j1eotJwK-pSRKwosUJS_35E=",
        //     title: "KORAIL 스마트 학사관리 시스템 인재개발원 리뉴얼",
        //     summary: "서브 / 퍼블리싱 참여도 50% / 반응형웹",
        //     url: "http://cyber.korail.com/front",
        //     important: false
        // },
        // {
        //     id: 25,
        //     cate: "responsive",
        //     img: "https://media.istockphoto.com/id/640970604/ko/%EC%82%AC%EC%A7%84/%EB%B0%94%EB%8B%A4-%EC%84%B8%EB%A1%9C-%EC%82%AC%EC%A7%84-%EC%9D%BC%EC%B6%9C.jpg?s=170667a&w=0&k=20&c=z0FzfG7OR3s17v1sNIp7j1eotJwK-pSRKwosUJS_35E=",
        //     title: "KORAIL 스마트 학사관리 시스템 적성검사 구축",
        //     summary: "서브 / 퍼블리싱 참여도 50% / 반응형웹",
        //     url: "https://kra.korail.com",
        //     important: false
        // },
        // {
        //     id: 26,
        //     cate: "responsive",
        //     img: "https://media.istockphoto.com/id/640970604/ko/%EC%82%AC%EC%A7%84/%EB%B0%94%EB%8B%A4-%EC%84%B8%EB%A1%9C-%EC%82%AC%EC%A7%84-%EC%9D%BC%EC%B6%9C.jpg?s=170667a&w=0&k=20&c=z0FzfG7OR3s17v1sNIp7j1eotJwK-pSRKwosUJS_35E=",
        //     title: "국기원 사이버 연수원 리뉴얼",
        //     summary: "메인 / 퍼블리싱 단독작업 / 국·영문 반응형웹",
        //     url: "http://wta.kukkiwon.or.kr/kr",
        //     important: false
        // },
        // {
        //     id: 27,
        //     cate: "adaptive",
        //     img: "https://media.istockphoto.com/id/640970604/ko/%EC%82%AC%EC%A7%84/%EB%B0%94%EB%8B%A4-%EC%84%B8%EB%A1%9C-%EC%82%AC%EC%A7%84-%EC%9D%BC%EC%B6%9C.jpg?s=170667a&w=0&k=20&c=z0FzfG7OR3s17v1sNIp7j1eotJwK-pSRKwosUJS_35E=",
        //     title: "KNA 대한간호협회 회원등록센터 리뉴얼",
        //     summary: "서브 / 퍼블리싱 참여도 50% / PC, 모바일 적응형웹 / print css",
        //     url: "http://membership.koreanurse.or.kr",
        //     important: false
        // },
        // {
        //     id: 28,
        //     cate: "adaptive",
        //     img: "https://media.istockphoto.com/id/640970604/ko/%EC%82%AC%EC%A7%84/%EB%B0%94%EB%8B%A4-%EC%84%B8%EB%A1%9C-%EC%82%AC%EC%A7%84-%EC%9D%BC%EC%B6%9C.jpg?s=170667a&w=0&k=20&c=z0FzfG7OR3s17v1sNIp7j1eotJwK-pSRKwosUJS_35E=",
        //     title: "KNA 대한간호협회 면허신고센터 리뉴얼",
        //     summary: "서브 / 퍼블리싱 참여도 40% / PC, 모바일 적응형웹",
        //     url: "http://lic.kna.or.kr/lic/user/main.do",
        //     important: false
        // }
    ]
};

export default data;