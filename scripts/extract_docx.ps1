$tmp='d:\Portfolio\portfolio\.tmp_docx'
Remove-Item -Recurse -Force $tmp -ErrorAction SilentlyContinue
$zip = 'd:\Portfolio\portfolio\.tmp_docx.zip'
Copy-Item 'd:\Portfolio\portfolio\src\NALUGO SAMIA.docx' $zip -Force
Expand-Archive -Path $zip -DestinationPath $tmp -Force
Remove-Item $zip -Force
$xml = Get-Content "$tmp\word\document.xml" -Raw
$matches = [regex]::Matches($xml,'<w:t[^>]*>(.*?)</w:t>')
$arr = @()
foreach($m in $matches){ $arr += $m.Groups[1].Value }
$out = $arr -join "`n"
$out | Out-File -FilePath "$tmp\doc_text.txt" -Encoding utf8
Get-Content "$tmp\doc_text.txt"