# Téléchargement de données depuis google sheet
# $source = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRRIkzYP-oFZUeUYO0z0_XQeZVZo7fzOk0w6fbDdJAEXK4ydgUpdv_bLOWsqehH27Sov-CUodHSRjRW/pub?gid=60438339&single=true&output=csv'
# $destination = './_data/sorties.csv'
# Invoke-WebRequest -Uri $source -OutFile $destination

[system.Diagnostics.Process]::Start("chrome","http://localhost:4000")
bundle exec jekyll serve --drafts --config _config.yml,_config.dev.yml
