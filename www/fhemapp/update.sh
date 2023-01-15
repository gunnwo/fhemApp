#!/bin/bash
gitrepo=https://github.com/gunnwo/fhemApp.git
tempdir=update
appdir=$(dirname "$(readlink -e "$0")")
echo ---------------------------------------------------------------
echo $(date) " Starting Update FHEMApp..."
echo ---------------------------------------------------------------
rm -rf $tempdir
git clone $gitrepo $tempdir
rsync -av $tempdir/www/fhemapp/ $appdir | sed '0,/^$/d'
rm -rf $tempdir
echo ---------------------------------------------------------------
echo $(date) " Updating FHEMApp is finished."
echo ---------------------------------------------------------------
