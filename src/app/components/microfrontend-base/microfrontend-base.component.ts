import { Component, Input, NgZone, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoggerService } from '../../services/logger/logger.service';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-main',
    templateUrl: './microfrontend-base.component.html',
    styleUrls: [
      'microfrontend-base.component.scss'
    ],
    encapsulation: ViewEncapsulation.ShadowDom
})
export class MicrofrontendBaseComponent implements OnInit {
    /**
     * Locale attribute for initializing component
     */
    @Input()
    public locale: string;

    /**
     * Local channel for sending and receiving messages from its parent
     */
    @Input()
    public localChannel: string;

    /**
     * Application (general) channel
     */
    @Input()
    public appChannel: string;

    /**
     * BroadcastChannel for application channel
     */
    private appBroadcastChannel: BroadcastChannel;

    /**
     * BroadcastChannel for parent <-> child channel
     */
    private localBroadcastChannel: BroadcastChannel;

    constructor(private ngZone: NgZone,
                private translate: TranslateService,
                private loggerService: LoggerService){
        this.locale = 'en';
        this.appChannel = 'microfrontends';
    }

    ngOnInit() {
        this.initI18n();
        this.initEventsChannels();
        this.appBroadcastChannel.postMessage({
            event: 'ComponentInitialized',
            payload: {
                component: environment.config.name
            }
        });
    }

    /**
     * Handle messages received by the parent channel
     * @param message
     */
    handleParentMessage(message) {
        this.loggerService.log('Message received from parent: ' + message.cmd);
        if (message.cmd === 'changeLocale') {
            this.changeLocale(message.payload.locale);
        }
    }

    /**
     * Handle messages received by the general broadcast channel
     * @param message
     */
    handleApplicationMessages(message) {
        this.loggerService.log('Message received from general channel: ' + message.cmd);
        if (message.cmd === 'changeLocale') {
            this.changeLocale(message.payload.locale);
        }
    }

    /**
     * Initializes translate service
     */
    private initI18n() {
        this.translate.setDefaultLang(this.locale);
        this.translate.use(this.locale);
    }

    /**
     * Manages locale changes
     * @param locale
     */
    private changeLocale(locale) {
        this.locale = locale;
        this.translate.use(this.locale);
    }


    /**
     * Initializes the channels used by this microfrontend
     */
    private initEventsChannels() {
        this.loggerService.log('Initializing application channel....');
        this.appBroadcastChannel = new BroadcastChannel(this.appChannel);
        this.appBroadcastChannel.onmessage = (message) => {
            this.ngZone.run(() => {
                this.handleApplicationMessages(message.data);
            });
        };

        if (this.localChannel) {
            this.loggerService.log(`Initializing local channel <>....`);
            this.localBroadcastChannel = new BroadcastChannel(this.localChannel);
            this.localBroadcastChannel.onmessage = (message) => {
                this.ngZone.run(() => {
                    this.handleParentMessage(message.data);
                });
            };
        }
    }
}
