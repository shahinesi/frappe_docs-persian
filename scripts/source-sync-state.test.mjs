import test from 'node:test';
import assert from 'node:assert/strict';
import { applySnapshotState } from './source-sync-state.mjs';

test('flags a changed source for translation review without changing the translation path', () => {
  const page = { translation_status: 'quality_checked', quality_status: 'passed', translation_path: 'content/fa/example.md' };
  const result = applySnapshotState(page, { digest: 'new-hash', previousDigest: 'old-hash', now: '2026-10-27T00:00:00Z' });
  assert.deepEqual(result, { changed: true, needsUpdate: true });
  assert.equal(page.translation_status, 'needs_update');
  assert.equal(page.quality_status, 'not_reviewed');
  assert.equal(page.translation_path, 'content/fa/example.md');
  assert.equal(page.source_version, 'new-hash');
});

test('does not flag a first snapshot or an unchanged source', () => {
  const initial = { translation_status: 'translated', translation_path: 'content/fa/example.md' };
  assert.deepEqual(applySnapshotState(initial, { digest: 'first', previousDigest: null }), { changed: false, needsUpdate: false });
  assert.equal(initial.translation_status, 'translated');
  const unchanged = { translation_status: 'published', translation_path: 'content/fa/live.md' };
  assert.deepEqual(applySnapshotState(unchanged, { digest: 'same', previousDigest: 'same' }), { changed: false, needsUpdate: false });
  assert.equal(unchanged.translation_status, 'published');
});
