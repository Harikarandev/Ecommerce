/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-Login',
  templateUrl: './Login.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class LoginComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_qodO9Kt9LvyZhQ99(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_qodO9Kt9LvyZhQ99(bh) {
    try {
      bh = this.sd_zaxVTehSM7RQ39pi(bh);
      //appendnew_next_sd_qodO9Kt9LvyZhQ99
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qodO9Kt9LvyZhQ99');
    }
  }

  login(username: any = undefined, password: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { username: username, password: password };
      bh.local = {};

      bh = this.sd_KV2UaoD3gMgRgxC6(bh);
      //appendnew_next_login
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AiafnmeOL3nE1kjc');
    }
  }

  //appendnew_flow_LoginComponent_start

  sd_zaxVTehSM7RQ39pi(bh) {
    try {
      this.page.username = undefined;
      this.page.password = undefined;

      //appendnew_next_sd_zaxVTehSM7RQ39pi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zaxVTehSM7RQ39pi');
    }
  }

  sd_KV2UaoD3gMgRgxC6(bh) {
    try {
      const page = this.page;
      console.log('check');
      console.log(page.username);
      console.log(page.password);
      if (!page.username && !page.password) {
        bh.input.status = false;
        bh.input.message = 'Enter Credentials';
      } else if (page.username === 'hari' && page.password === '1234') {
        bh.input.status = true;
      } else {
        bh.input.status = false;
        bh.input.message = 'Enter Valid Credentials';
      }

      bh = this.sd_uazniWEOm6EP6WYX(bh);
      //appendnew_next_sd_KV2UaoD3gMgRgxC6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KV2UaoD3gMgRgxC6');
    }
  }

  async sd_uazniWEOm6EP6WYX(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.input.status,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_d1VnknMzgR4XSoRQ(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_O2rlIopbqDs1MnTl(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uazniWEOm6EP6WYX');
    }
  }

  async sd_d1VnknMzgR4XSoRQ(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/dashboard');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });

      //appendnew_next_sd_d1VnknMzgR4XSoRQ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_d1VnknMzgR4XSoRQ');
    }
  }

  sd_O2rlIopbqDs1MnTl(bh) {
    try {
      const page = this.page;
      console.log(bh.input.message);

      bh = this.sd_n14KfVNkRDHcSX0C(bh);
      //appendnew_next_sd_O2rlIopbqDs1MnTl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_O2rlIopbqDs1MnTl');
    }
  }

  sd_n14KfVNkRDHcSX0C(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open(bh.input.message, '', {
        duration: 2000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });

      //appendnew_next_sd_n14KfVNkRDHcSX0C
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n14KfVNkRDHcSX0C');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_LoginComponent_Catch
}
