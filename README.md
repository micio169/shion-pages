# 시온「シオン」 GitHub Pages 사이트

이 폴더 안의 파일을 GitHub 저장소에 올리고 GitHub Pages를 켜면 바로 사용할 수 있습니다.

## 꼭 바꿀 것

`assets/site.js`에서 아래 값을 본인 봇의 애플리케이션 ID로 변경하세요.

```js
const CLIENT_ID = "YOUR_CLIENT_ID_HERE";
```

변경 후 `index.html`의 `봇 초대하기` 버튼이 실제 초대 링크로 연결됩니다.

## Discord Developer Portal에 넣을 URL

GitHub Pages 주소가 `https://username.github.io/shion-bot/`라면:

```txt
이용 약관 URL:
https://username.github.io/shion-bot/terms.html

개인정보 보호 정책 URL:
https://username.github.io/shion-bot/privacy.html
```

## 올리는 방법

1. 새 GitHub 저장소를 만듭니다.
2. 이 폴더의 파일을 저장소 루트에 업로드합니다.
3. 저장소 `Settings`로 이동합니다.
4. `Pages` 메뉴를 엽니다.
5. `Deploy from a branch`를 선택합니다.
6. Branch는 `main`, folder는 `/root`로 설정합니다.
7. 배포된 주소를 Discord Developer Portal에 입력합니다.
