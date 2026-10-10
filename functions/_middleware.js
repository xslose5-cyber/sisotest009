// www 없는 주소(mariv.shop)로 들어온 요청을 www.mariv.shop 으로 영구 이동(301)시킵니다.
// 광고·비즈채널·검색엔진 대표 주소가 모두 www.mariv.shop 이라 주소를 하나로 통일합니다.
export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.hostname === 'mariv.shop') {
    url.hostname = 'www.mariv.shop';
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
