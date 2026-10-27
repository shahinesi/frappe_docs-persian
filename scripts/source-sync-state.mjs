export function applySnapshotState(page, { digest, previousDigest, now = new Date().toISOString() }) {
  const changed = Boolean(previousDigest && previousDigest !== digest);
  const shouldFlagTranslation = changed && ['translated', 'quality_checked', 'published'].includes(page.translation_status);
  page.source_version = digest;
  page.source_content_sha256 = digest;
  page.snapshot_status = 'fetched';
  delete page.snapshot_error;
  if (shouldFlagTranslation) {
    page.translation_status = 'needs_update';
    page.quality_status = 'not_reviewed';
    page.source_change_detected_at = now;
  }
  return { changed, needsUpdate: shouldFlagTranslation };
}
