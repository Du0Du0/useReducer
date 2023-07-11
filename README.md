# useReducer

## useReducer를 쓰는 이유

- 전역의 데이터가 외부요인에 따라 함부로 변경되면 안되기 때문에 구조적으로 데이터값을 관리하면서 변경하도록 강제하는 시스템적인 틀

## useReducer에서 중요한 개념

- dispatch(전달자): state정보값에 변경요청을 전달해주는 전달자 (금고관리 직원)
- reducer(변형자): dispatch로 전달받은 요청에만 반응해 전역 데이터를 변경해주는 변경자 (창구직원)
- action(변경내용): dispatch로 전달요청을 보낼때 변경사항이 담겨있는 특별한 객체 {type: '변경방법', payload: '변경할 데이터'} (계좌입금 용지)

: 고객이 작성한 계좌입금 용지의 내용을 확인해서 창구직원이 금고관리직원에게 전달해주면 금고관리직원이 계좌용지의 내용에 따라 금고 내용물 변경
: 사용자가 보낸 action객체를 dipatch가 reducer에 전달하면 reducer는 action의 type에 따라 payload값으로 전역 데이터 변경

## 최종정리

- dispatch가 action객체를 가지고 변경요청을 보내면 reducer는 action객체의 타입에따라 같이 전달된 payload값으로 기존 전역 state를 변경
