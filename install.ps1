$ErrorActionPreference = "Stop"

$RepoDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$TargetDir = Join-Path $HOME ".codex\skills"

New-Item -ItemType Directory -Force -Path $TargetDir | Out-Null

Get-ChildItem -Path $RepoDir -Directory | Where-Object { $_.Name -ne ".git" } | ForEach-Object {
    Copy-Item -Path $_.FullName -Destination $TargetDir -Recurse -Force
}

Write-Host "Installed Codex skills to $TargetDir"
