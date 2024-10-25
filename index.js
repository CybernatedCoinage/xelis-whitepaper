import xelis_whitepaper from './xelis_whitepaper.pdf';
import favicon from './favicon.png';

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);

  if (url.pathname === '/') {
    return new Response(xelis_whitepaper, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="XELIS__A_High_Performance_BlockDAG_for_Private__Instant__and_Scalable_Decentralized_Transactions_and_Applications.pdf"',
      },
    });
  }

  if (url.pathname === '/favicon.ico') {
    return new Response(favicon, {
      status: 200,
      headers: {
        'Content-Type': 'image/png'
      }
    });
  }

  return new Response('Not Found', { status: 404 });
}