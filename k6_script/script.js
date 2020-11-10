import http from 'k6/http';
import { sleep } from 'k6';
import { check } from 'k6';

export const options = {
  vus: 150,
  duration: '30s',
};

export default function () {
  const MaxCount = 10000000;
  const id = Math.ceil(Math.random() * MaxCount).toString();
  const res = http.get(`http://localhost:3000/api/images/${id}/`);
  check(res, {
    'is status 200': (r) => r.status === 200,
    'transaction time < 200ms': r => r.timings.duration < 200,
    'transaction time < 500ms': r => r.timings.duration < 500,
    'transaction time < 1000ms': r => r.timings.duration < 1000,
    'transaction time < 2000ms': r => r.timings.duration < 2000,
  });
  sleep(0.1);
}
