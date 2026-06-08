#!/usr/bin/env bash
set -euo pipefail

repo_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
target_dir="${HOME}/.codex/skills"

mkdir -p "$target_dir"

for skill_dir in "$repo_dir"/*; do
  [ -d "$skill_dir" ] || continue
  skill_name="$(basename "$skill_dir")"
  [ "$skill_name" = ".git" ] && continue
  cp -R "$skill_dir" "$target_dir/"
done

echo "Installed Codex skills to $target_dir"
