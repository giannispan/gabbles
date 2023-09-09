/* eslint-disable @typescript-eslint/no-unused-vars */
import { ActivatedRouteSnapshot, DetachedRouteHandle, BaseRouteReuseStrategy } from '@angular/router';

export class AppRouteReuseStrategy implements BaseRouteReuseStrategy {
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }
  store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle): void {}
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    return null;
  }
  public shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    // To be changed to specific /gabs route
    if (curr.routeConfig?.path === '**') {
      return future.data['reuseComponent'];
    }
    return future.routeConfig === curr.routeConfig || future.data['reuseComponent'];
  }
}
