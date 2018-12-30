"Cloud Functions Node.js Emulator   https://cloud.google.com/functions/docs/emulator" 
"functions deploy http --trigger-http --local-path=c:\mySandBox\WebPages\nodejs\gcloud\third-party\serverless\google-quickstart" 
"emacs c:\mySandBox\WebPages\nodejs\gcloud\third-party\serverless\google-quickstart\index.js" 
"GCF quickstart:   https://cloud.google.com/functions/docs/quickstart"
"GCF Emulator github: https://github.com/GoogleCloudPlatform/cloud-functions-emulator"


ISSUE case:
https://github.com/GoogleCloudPlatform/cloud-functions-emulator/issues/104
https://cloud.google.com/docs/authentication/production?hl=en_US

c:\mySandBox\WebPages\nodejs\gcloud\GCF-emulator>echo %GOOGLE_APPLICATION_CREDENTIALS%
C:\Users\C\Downloads\data\img\Stef_Flick_May2018\other\vision\blue-fang-e5e2329bff59.json
c:\mySandBox\WebPages\nodejs\gcloud\GCF-emulator>set GOOGLE_APPLICATION_CREDENTIALS=

functions start
functions deploy visionreq --trigger-http
functions describe visionreq
functions call visionreq


==========================

C:\Users\C\AppData\Roaming\npm\functions-emulator -> C:\Users\C\AppData\Roaming\npm\node_modules\@google-cloud\functions-emulator\bin\functions

> @google-cloud/functions-emulator@1.0.0-beta.5 postinstall C:\Users\C\AppData\Roaming\npm\node_modules\@google-cloud\functions-emulator
> node scripts/upgrade-warning


If you're using the Emulator via the Firebase CLI, you can
disregard this message.

If you're upgrading @google-cloud/functions-emulator, these
are the recommended upgrade steps:

1.  Stop the currently running emulator, if any:

        functions stop

2.  Uninstall the current emulator, if any:

        npm uninstall -g @google-cloud/functions-emulator

3.  Install the new version of the emulator:

        npm install -g @google-cloud/functions-emulator

If you have trouble after upgrading, try deleting the config
directory found in:

    ~/.config/configstore/@google-cloud/functions-emulator

Then restart the emulator. You can also check for any renegade
Node.js emulator processes that may need to be killed:

    ps aux | grep node

+ @google-cloud/functions-emulator@1.0.0-beta.5
updated 4 packages in 10.821s

c:\mySandBox\WebPages\nodejs\gcloud\GCF-emulator>




STEP 1=====================================
c:\mySandBox\WebPages\nodejs\gcloud\GCF-emulator>functions start
Starting Google Cloud Functions Emulator...
Google Cloud Functions Emulator STARTED
+----------------------------------------------------------------------------------------+
¦ Status ¦ Name       ¦ Trigger ¦ Resource                                               ¦
+--------+------------+---------+--------------------------------------------------------¦
¦ READY  ¦ helloWorld ¦ HTTP    ¦ http://localhost:8010/blue-fang/us-central1/helloWorld ¦
+----------------------------------------------------------------------------------------+

STEP 2=====================================

c:\mySandBox\WebPages\nodejs\gcloud\GCF-emulator>functions deploy http --trigger-http
Copying file://C:\Users\C\AppData\Local\Temp\tmp-33332pFokOtqeO9El.zip...
Waiting for operation to finish...done.
Deploying function.......done.
Function http deployed.
+-----------------------------------------------------------------------------+
¦ Property   ¦ Value                                                          ¦
+------------+----------------------------------------------------------------¦
¦ Name       ¦ http                                                           ¦
+------------+----------------------------------------------------------------¦
¦ Trigger    ¦ HTTP                                                           ¦
+------------+----------------------------------------------------------------¦
¦ Resource   ¦ http://localhost:8010/blue-fang/us-central1/http               ¦
+------------+----------------------------------------------------------------¦
¦ Timeout    ¦ 60 seconds                                                     ¦
+------------+----------------------------------------------------------------¦
¦ Local path ¦ c:\mySandBox\WebPages\nodejs\gcloud\GCF-emulator               ¦
+------------+----------------------------------------------------------------¦
¦ Archive    ¦ file://C:\Users\C\AppData\Local\Temp\tmp-33332pFokOtqeO9El.zip ¦
+-----------------------------------------------------------------------------+



STEP 3=====================================

c:\mySandBox\WebPages\nodejs\gcloud\GCF-emulator>functions describe http
+-----------------------------------------------------------------------------+
¦ Property   ¦ Value                                                          ¦
+------------+----------------------------------------------------------------¦
¦ Name       ¦ http                                                           ¦
+------------+----------------------------------------------------------------¦
¦ Trigger    ¦ HTTP                                                           ¦
+------------+----------------------------------------------------------------¦
¦ Resource   ¦ http://localhost:8010/blue-fang/us-central1/http               ¦
+------------+----------------------------------------------------------------¦
¦ Timeout    ¦ 60 seconds                                                     ¦
+------------+----------------------------------------------------------------¦
¦ Local path ¦ c:\mySandBox\WebPages\nodejs\gcloud\GCF-emulator               ¦
+------------+----------------------------------------------------------------¦
¦ Archive    ¦ file://C:\Users\C\AppData\Local\Temp\tmp-33332pFokOtqeO9El.zip ¦
+-----------------------------------------------------------------------------+


STEP 4=====================================

On browser:
   http://localhost:8010/blue-fang/us-central1/http

On command line:
   c:\mySandBox\WebPages\nodejs\gcloud\GCF-emulator>functions call http
   ExecutionId: f70eebd4-5e40-482a-8119-41061f7437e8
   Result: Hello World test from Emulator!

"git remote add origin https://github.com/kfrajer/GCF-emulator.git" 
