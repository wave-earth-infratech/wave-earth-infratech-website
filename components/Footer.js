import Link from 'next/link'
export default function Footer() {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

  return (
    <>






        <div id="anywhere-home" class="">
        </div>


        <div id="elevate-load">
            <div class="loader-wrapper">
                <div class="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>


    </>
  )
}
