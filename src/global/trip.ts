const logoImages = import.meta.glob('@/assets/img/logo/*.png', {
  eager: true,
  import: 'default',
});

const mapImages = import.meta.glob('@/assets/img/map_*.png', {
  eager: true,
  import: 'default',
});

const getLogo = (date: string) =>
  logoImages[`/src/assets/img/logo/${date}.png`];

const getMap = (fileName: string) =>
  mapImages[`/src/assets/img/${fileName}.png`];

export interface trip {
  date: string;
  desc1: string;
  desc2: string;
  logo: string | undefined;
  map: string | undefined;
  map2: string | undefined;
  buttonText1: string | undefined;
  buttonText2: string | undefined;
  drive: string;
  title: string;
  radio: Record<string, string>;
  answer: string;
  answerTitle: string;
  answerText: string;
  errorTitle: string;
  errorText: string;
}

export const globalTrip = {
  trips: [
    {
      date: '20240929',
      desc1: '2024.09.29',
      desc2: '부암동 나들이',
      logo: getLogo('20240929'),
      map: getMap('20240929'),
      map2: undefined,
      buttonText1: undefined,
      buttonText2: undefined,
      drive: 'http://naver.me/GTnQ1tj1',
      title: '등산 이후...\n들렀던 카페의 이름은~',
      radio: {
        v1: '백화밀',
        v2: '산모퉁이',
        v3: '맘스키친',
        v4: '생마차',
      },
      answer: 'v1',
      answerTitle: '정답은 백화밀~~~☕',
      answerText: '가는 길이 험했던 카페..',
      errorTitle: '너무하네...🤨',
      errorText: '가는길이 험했잖아...',
    },
    {
      date: '20241005',
      desc1: '2024.10.05',
      desc2: '강북 나들이',
      logo: getLogo('20241005'),
      map: getMap('20241005'),
      map2: undefined,
      buttonText1: undefined,
      buttonText2: undefined,
      drive: 'http://naver.me/5UEiY0Vg',
      title: '기억 하시나요?\n왕이 제향을 위해 걷는 길은~',
      radio: {
        v1: '신로',
        v2: '어로',
        v3: '향로',
      },
      answer: 'v2',
      answerTitle: '정답입니다~🎉',
      answerText: "King's Road....",
      errorTitle: '이건 좀 어렵다~~🤔',
      errorText: '인스스에서 본거 같은.. ^__^',
    },
    {
      date: '20241013',
      desc1: '2024.10.13',
      desc2: '파주 출판도시 나들이',
      logo: getLogo('20241013'),
      map: getMap('20241013_1'),
      map2: getMap('20241013_2'),
      buttonText1: '파주 경로도 궁금하다면?',
      buttonText2: '합정 경로도 궁금하다면?',
      drive: 'http://naver.me/xLWf4P5G',
      title: '즐거운 교육시간 이후\n어느 숲으로 떠났을까요?',
      radio: {
        v1: '동물의숲',
        v2: '몽환의숲',
        v3: '지혜의숲',
      },
      answer: 'v3',
      answerTitle: '너무 조용했던 지혜의 숲..🤐',
      answerText: '인내의 숲을 생각했지만.. 많이 달랐던...',
      errorTitle: '이걸 틀려..?🙄',
      errorText: '쉬어가는 문제인데 증말~~',
    },
    {
      date: '20241020',
      desc1: '2024.10.20',
      desc2: '다산로 나들이',
      logo: getLogo('20241020'),
      map: getMap('20241020'),
      map2: undefined,
      buttonText1: undefined,
      buttonText2: undefined,
      drive: 'http://naver.me/G380jI5p',
      title: 'TMI Quiz~~\n이날 결혼식을 올린 연예인은?',
      radio: {
        v1: '안재욱',
        v2: '조세호',
        v3: '류이서',
      },
      answer: 'v2',
      answerTitle: '조세호씨 행복하게 사세요~🎊',
      answerText: '신라호텔은 축의금을 얼마나 내야할까....',
      errorTitle: '불참해서 잊어버릴 수도 있지~🔎',
      errorText: '모르는데 어떻게 가요??',
    },
    {
      date: '20241026',
      desc1: '2024.10.26',
      desc2: '용산 나들이',
      logo: getLogo('20241026'),
      map: getMap('20241026_1'),
      map2: getMap('20241026_2'),
      buttonText1: '다녀온 경로는 어떨지..',
      buttonText2: '아이디어와는 너무 다른 경로..',
      drive: 'http://naver.me/5UEzur2F',
      title: '서울 촌놈의 취향 저격이였던\n카페의 이름은~',
      radio: {
        v1: '스탠딩커피',
        v2: '웨스트빙고',
        v3: '만월경',
      },
      answer: 'v2',
      answerTitle: '서빙고라 웨스트빙고~🤣',
      answerText: '너무 작명센스가 좋다 증말~~',
      errorTitle: '아직 취향을 모르는걸로...😥',
      errorText: '근데 이걸 모르네~ㅋㅋ',
    },
    {
      date: '20241102',
      desc1: '2024.11.02',
      desc2: '서래마을, 낙산공원 나들이',
      logo: getLogo('20241102_1'),
      map: getMap('20241102_1'),
      map2: getMap('20241102_2'),
      buttonText1: '자율학습 경로도 궁금해~',
      buttonText2: '기존 코스도 다시 보여줘~',
      drive: 'http://naver.me/5Kb16v4r',
      title: '자율학습을 위해 버스를 타고\n10월의 어느 날을 복습했을까요~',
      radio: {
        v1: '5일',
        v2: '13일',
        v3: '20일',
        v4: '26일',
      },
      answer: 'v3',
      answerTitle: '한남동부터 약수역까지...🚌',
      answerText: '진짜 많이 걸었었더라...',
      errorTitle: '이걸 벌써 잊어먹었어??😒',
      errorText: '바깥구경을 덜했네~',
    },
    {
      date: '20241110',
      desc1: '2024.11.10',
      desc2: '서울어린이대공원 나들이',
      logo: getLogo('20241110_2'),
      map: getMap('20241110_2'),
      map2: getMap('20241110_3'),
      buttonText1: '과연 아이디어대로 다녀왔을지?',
      buttonText2: '역시나 아이디어는 아이디어일 뿐이다~',
      drive: 'http://naver.me/xVBWuVo0',
      title: '놀이공원에서부터 함께하며\n이날의 사진 요정은 누구일까요~',
      radio: {
        v1: '구데타마',
        v2: '폼폼푸린',
        v3: '시나모롤',
      },
      answer: 'v1',
      answerTitle: '경품으로 우연히 만난 구데타마~',
      answerText: '가방에 달고 있어도 잘 어울리더라구요..^_^',
      errorTitle: '집에 잘 보관하실꺼라며요.....?',
      errorText: '퇴근 시켜드린건 아니죠.....?',
      // 질문 v1
      // title: "열심히 지하철을 타고...\n도착한 역의 이름은 무엇일까요~",
      // radio: {
      //   v1: "우장산역",
      //   v2: "아차산역",
      // },
      // answer: "v2",
      // answerTitle: "아차! 아차산역!",
      // answerText: "역시 당일이라 기억을 잘하네~",
      // errorTitle: "출발 말고....",
      // errorText: "집에 가고 싶으신건가..?",
    },
    {
      date: '20241123',
      desc1: '2024.11.23',
      desc2: '공주 나들이',
      logo: getLogo('20241123'),
      map: getMap('20241123'),
      map2: undefined,
      buttonText1: undefined,
      buttonText2: undefined,
      drive: 'http://naver.me/GoD1Gqnz',
      title: '고마열차에서 내려서\n원래 어디를 가려했었을까요~?',
      radio: {
        v1: '금강교',
        v2: '공산성',
        v3: '중동성당',
      },
      answer: 'v2',
      answerTitle: '5시까지 입장 제한이던...😥',
      answerText: '근데 찾아보니까 그냥 들어가더라...',
      errorTitle: '다 다녀온 곳이라 헷갈리나보다~😯',
      errorText: '5시에 문 닫던 곳 있잖아~',
    },
  ],
  getTrip(date: string) {
    const result = this.trips.find((item) => item.date === date);
    return result ? result : undefined;
  },
  getIsValid(date: string) {
    const result = this.trips.find((item) => item.date === date);
    return result ? 1 : 0;
  },
};
