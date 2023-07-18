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
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-Registration',
  templateUrl: './Registration.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class RegistrationComponent {
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
      this.sd_uc5Z4L7Pm1CznVKr(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_uc5Z4L7Pm1CznVKr(bh) {
    try {
      bh = this.sd_Ops5FKj2YTTUCvgH(bh);
      //appendnew_next_sd_uc5Z4L7Pm1CznVKr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uc5Z4L7Pm1CznVKr');
    }
  }

  userreg(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_IHkU3fDB3alQLZKj(bh);
      //appendnew_next_userreg
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SrRTe5AmnO4ZvZgg');
    }
  }

  //appendnew_flow_RegistrationComponent_start

  sd_Ops5FKj2YTTUCvgH(bh) {
    try {
      bh = this.form(bh);
      //appendnew_next_sd_Ops5FKj2YTTUCvgH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ops5FKj2YTTUCvgH');
    }
  }

  form(bh) {
    try {
      this.page.fb = this.__page_injector__.get(FormBuilder);

      bh = this.sd_7XXLiJApVlo3p5Ls(bh);
      //appendnew_next_form
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mq02rhTE34p7krek');
    }
  }

  sd_7XXLiJApVlo3p5Ls(bh) {
    try {
      const page = this.page;
      page.registrationform = page.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required],
        gender: ['', Validators.required],
        countrycode: ['', Validators.required],
        phoneNumber: ['', [Validators.pattern('/^d{10}$/')]],
      });

      //appendnew_next_sd_7XXLiJApVlo3p5Ls
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7XXLiJApVlo3p5Ls');
    }
  }

  sd_IHkU3fDB3alQLZKj(bh) {
    try {
      const page = this.page;
      console.log(page.registrationform);
      console.log(page.registrationform.value);
      const phoneNumberPattern = /^\d{10}$/;
      if (!page.registrationform.value.firstName) {
        bh.input.status = false;
        bh.input.message = 'First Name is required';
      } else if (!page.registrationform.value.lastName) {
        bh.input.status = false;
        bh.input.message = 'Last Name is required';
      } else if (!page.registrationform.value.email) {
        bh.input.status = false;
        bh.input.message = 'Email Id is required';
      } else if (!page.registrationform.value.gender) {
        bh.input.status = false;
        bh.input.message = 'Gender is required';
      } else if (
        !page.registrationform.value.phoneNumber ||
        phoneNumberPattern.test(page.registrationform.value.phoneNumber)
      ) {
        bh.input.status = false;
        bh.input.message = 'Phone Number is required';
      } else {
        bh.input.status = true;
      }

      bh = this.sd_R9Xowhe9bPN6OigA(bh);
      //appendnew_next_sd_IHkU3fDB3alQLZKj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IHkU3fDB3alQLZKj');
    }
  }

  async sd_R9Xowhe9bPN6OigA(bh) {
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
        bh = this.sd_4qlEkrH2df384cYX(bh);
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
        bh = await this.sd_lhWzGevseWL0gwEy(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_R9Xowhe9bPN6OigA');
    }
  }

  sd_4qlEkrH2df384cYX(bh) {
    try {
      localStorage.setItem(
        'registrationform',
        JSON.stringify(this.page.registrationform.value)
      );

      bh = this.sd_02f5IjhBynu6XMtk(bh);
      //appendnew_next_sd_4qlEkrH2df384cYX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4qlEkrH2df384cYX');
    }
  }

  async sd_02f5IjhBynu6XMtk(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/login/forgetpassword');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });

      //appendnew_next_sd_02f5IjhBynu6XMtk
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_02f5IjhBynu6XMtk');
    }
  }

  sd_lhWzGevseWL0gwEy(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open(bh.input.message, 'ok', {
        duration: 2000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });

      //appendnew_next_sd_lhWzGevseWL0gwEy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lhWzGevseWL0gwEy');
    }
  }

  sd_VGpS3FdiYMsub6sI(bh) {
    try {
      const page = this.page;
      console.log(bh.error);

      //appendnew_next_sd_VGpS3FdiYMsub6sI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VGpS3FdiYMsub6sI');
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
      false ||
      this.sd_oqMuTP6qsrQFwy0n(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  sd_oqMuTP6qsrQFwy0n(bh) {
    const catchConnectedNodes = ['sd_VGpS3FdiYMsub6sI'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = this.sd_VGpS3FdiYMsub6sI(bh);
    //appendnew_next_sd_oqMuTP6qsrQFwy0n
    return true;
  }
  //appendnew_flow_RegistrationComponent_Catch
}
