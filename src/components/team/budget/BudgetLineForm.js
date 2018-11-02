import React from 'react';

const BudgetLineForm = ({ closeModal, modalState, tilteModel, handleSubmit, handleChange, budgetLine, errors }) => {
  if(!modalState) {
    return null;
  }


  return(
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{tilteModel} </p>
          <button className="delete" onClick={closeModal} />
        </header>
        <form onSubmit={handleSubmit}>
          <section className="modal-card-body">
            <div className="content">


              <div className="field">
                <label className="label">Title</label>
                <div className="control">
                  <input
                    className={`input ${errors.title ? 'is-danger' : ''}`}
                    name="title"
                    placeholder="Title"
                    onChange={handleChange}
                    value={budgetLine.title || ''}
                  />
                  {errors.title && <small className="help is-danger">{errors.title}</small>}
                </div>
              </div>

              <div className="field">
                <label className="label">Description</label>
                <div className="control">
                  <input
                    className={`input ${errors.description ? 'is-danger' : ''}`}
                    name="description"
                    placeholder="Information about budget line"
                    onChange={handleChange}
                    value={budgetLine.description || ''}
                  />
                  {errors.description && <small className="help is-danger">{errors.description}</small>}
                </div>
              </div>

              <div className="field">
                <label className="label">Date</label>
                <div className="control">
                  <input
                    className={`input ${errors.info ? 'is-danger' : ''}`}
                    type="date"
                    name="date"
                    placeholder="Date of the bill"
                    onChange={handleChange}
                    value={budgetLine.date || ''}
                  />
                  {errors.date && <small className="help is-danger">{errors.date}</small>}
                </div>
              </div>

              <div className="field">
                <label className="label">invoice tax number</label>
                <div className="control">
                  <input
                    className={`input ${errors.info ? 'is-danger' : ''}`}
                    name="invoice_tax_number"
                    placeholder="Date of the bill"
                    onChange={handleChange}
                    value={budgetLine.invoice_tax_number || ''}
                  />
                  {errors.invoice_tax_number && <small className="help is-danger">{errors.invoice_tax_number}</small>}
                </div>
              </div>

              <div className="field">
                <label className="label">Invoice image</label>
                <div className="control">
                  <input
                    className={`input ${errors.info ? 'is-danger' : ''}`}
                    name="invoice_image"
                    placeholder="Date of the bill"
                    onChange={handleChange}
                    value={budgetLine.invoice_image || ''}
                  />
                  {errors.invoice_image && <small className="help is-danger">{errors.invoice_image}</small>}
                </div>
              </div>


              <div className="field">
                <label className="label">Amount</label>
                <div className="control">
                  <input
                    className={`input ${errors.info ? 'is-danger' : ''}`}
                    name="amount"
                    placeholder="Date of the bill"
                    onChange={handleChange}
                    value={budgetLine.amount || ''}
                  />
                  {errors.amount && <small className="help is-danger">{errors.amount}</small>}
                </div>
              </div>

              {/* {
                "amount": 1233.0,
                "created_by": 1,
                "date": null,
                "description": "jjdfjd blba bla",
                "invoice_image": null,
                "invoice_tax_number": null,
                "team_id": 3,
                "title": "best team fgd"
              }, */}

            </div>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-rounded">Save changes</button>
            <a className="button is-rounded" onClick={closeModal}>Cancel</a>
          </footer>
        </form>
      </div>
    </div>
  );
};

export default BudgetLineForm;
